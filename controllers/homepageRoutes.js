const router = require("express").Router();
const { Gallery, Painting } = require("../models");
const withAuth = require("../utils/auth");

//What /___ routes do we want on the homepage?
