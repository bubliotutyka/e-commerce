import React from 'react';
import ProductManagement from './ProductManagement';
import StockManagement from './StockManagement';
import TransporterManagement from './TransporterManagement';
import PromotionManagement from './PromotionManagement';
import SupplierManagement from './SupplierManagement';

export default [
  {
    label: "Home",
    icon: <i class="fas fa-home"></i>,
    view: ProductManagement,
  },
  {
    label: "Stock",
    icon: <i class="fas fa-boxes"></i>,
    view: StockManagement,
  },
  {
    label: "Delivery",
    icon: <i class="fas fa-truck"></i>,
    view: TransporterManagement,
  },
  {
    label: "Promotion",
    icon: <i class="fas fa-percent"></i>,
    view: PromotionManagement,
  },
  {
    label: "Supplier",
    icon: <i class="fas fa-parachute-box"></i>,
    view: SupplierManagement,
  },
]