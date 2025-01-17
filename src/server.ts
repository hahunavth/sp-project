import App from '@/app';
// import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import validateEnv from '@utils/validateEnv';
import ImportProductRoute from './routes/importProduct.route';
import PriceQuotationRoute from './routes/priceQuotation.route';
import SupplierRoute from './routes/supplier.route';

process.on('uncaughtException', function (exception) {
  throw exception;
  // to see your exception details in the console
  // if you are on production, maybe you can send the exception details to your
  // email as well ?
});

validateEnv();

// NOTE: Thêm route líst vào đây.
const app = new App([new IndexRoute(), new SupplierRoute(), new PriceQuotationRoute(), new ImportProductRoute()]);

app.listen();
