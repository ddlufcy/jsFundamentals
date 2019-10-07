const express = require('express');
const router = express.Router();

//Arrays and Objects

const contact = {Name: "Daniel", Age:30, Alive:true};
const projects = ['Project Alpha', 'Project Beta', 'Blue project'];
let myContacts = [{Name: "Daniel", Location: 1150},{Name: "Aaron", Location: "Home"},{Name: "Cindy", Location:"Home"}];

router.get('/', (req, res) => res.send("This is a test page."));

router.get('/about', (req, res) => res.send("This an about route!"));

router.get('/contact', (req, res) => res.send(contact));

router.get('/myContacts', (req,res) => res.send(myContacts));
module.exports = router;