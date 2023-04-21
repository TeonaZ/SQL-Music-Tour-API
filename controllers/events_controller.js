const events = require('express').Router();
const db = require('../models')
const { Event } = db
const { Op } = require("sequelize");

events.get('/', async (req, res)=> {
    try {
const foundEvents = await Event.findAll({
    order: [["date", "ASC"]],
})
res.status(200).json(foundEvents)
    } catch (error){
        res.status(500).json(error)
    }
})

// CREATE AN EVENT
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        console.log(foundEvent)
        if(!foundEvent){
            res.status(404).json('Band not found.')
        }else {
            res.status(200).json(foundEvent)
        }
        //res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// UPDATE AN EVENT
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = events