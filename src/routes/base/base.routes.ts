import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';

/**
 * Base route
 * Generic class for all routes
 */
class BaseRoute implements Routes {
  public path;
  public router = Router();

  constructor(path: string) {
    this.path = path;
  }
}

export default BaseRoute;
