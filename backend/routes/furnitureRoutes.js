const express = require("express");
const {
  createFurniture,
  getFurnitures,
  updateFurniture,
  deleteFurniture,
  getRequiredFurniture,
  sortRentASC,
  sortRentDESC,
} = require("../controllers/furnitureController");
const authorized = require("../middleware/authentication");
const router = express.Router();

router
  .route("/admin/furniture/new")
  .post(authorized.myAuth, authorized.authorizedRoles("admin"), createFurniture);

router
  .route("/admin/furniture/:id")
  .put(authorized.myAuth, authorized.authorizedRoles("admin"), updateFurniture)
  .delete(authorized.myAuth, authorized.authorizedRoles("admin"), deleteFurniture);

router.route("/furnitures").get(getFurnitures);
router.route("/furniture/:id").get(getRequiredFurniture);

router.route("/furnitures/sort/ascending").get(sortRentASC);
router.route("/furnitures/sort/descending").get(sortRentDESC);
module.exports = router;
