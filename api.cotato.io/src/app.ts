import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import * as cors from "cors";
import * as morganLogger from "morgan";
import { graphql } from "graphql";

import { submissionSchema } from "./submission/submission.schema";

const app: express.Express = express();


// CORS setup
const corsOptions = {
    origin: "*",
    methods: "OPTIONS, GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Logger
app.use(morganLogger("dev"));

// GraphQL setup here
app.use('/graphql', graphqlHTTP({
  schema: submissionSchema,
  pretty: true,
  graphiql: true
}));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

    app.use((error: any, req, res, next) => {
        res.status(error['status'] || 500);
        res.render('error', {
            message: error.message,
            error
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((error: any, req, res, next) => {
    res.status(error['status'] || 500);
    res.render('error', {
        message: error.message,
        error: {}
    });
    return null;
});


export default app;