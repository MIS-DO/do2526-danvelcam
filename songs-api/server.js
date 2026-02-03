import http from "http";
import express from "express";
import cors from "cors";
import { initialize } from "@oas-tools/core";
import logger from "./logger.js";

const deploy = async () => {
    const serverPort = process.env.PORT || 8080;
    const app = express();
    app.use(cors());
    app.use(express.json({ limit: '50mb' }));

    const config = {
        logger: {
            customLogger: logger
        }
    }

    initialize(app, config).then(() => {
        http.createServer(app).listen(serverPort, () => {
            logger.info("App running at http://localhost:" + serverPort);
            if (!config?.middleware?.swagger?.disable) {
                logger.info('API docs (Swagger UI) available on http://localhost:' + serverPort + '/docs');
            }
        });
    });
}

const undeploy = () => {
    process.exit();
};

export default { deploy, undeploy }

