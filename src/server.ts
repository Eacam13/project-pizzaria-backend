import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'
import cors from 'cors'
import path from 'path'
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../src/utils/swagger.json';

import { router } from './routes';
import fileUpload from 'express-fileupload';


const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(cors());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }
}));
app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        // Se for uma instância de Error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })
})

app.listen({port: process.env.PORT, host: '0.0.0.0'}, () => console.log('Servidor online!'));
