const Event = require("../models/Event");

async function getEvents(req, res) {
  try {
    const events = await Event.find().sort({
      date: 1
    });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

async function getUpcomingEvents(req, res) {
  try {
    const events = await Event.find({ date: { $gte: new Date() } }).sort({
      date: 1,
    });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

async function getEventById(req, res) {
  try {
    const event = await Event.findById(req.params.id);

    if(!event) {
      return res.status(404).json({ message: 'Event not found'});
    }

    res.json(event);
  } catch(err) {
    res.status(500).json({
      message: 'Server error', error: err.message
    })
  }
}

async function createEvent(req, res) {
  try {
    const event = await Event.create(req.body);

    res.status(200).json(event)
  } catch(err){
    res.status(400).json({
      message: 'Could not create event', error: err.message
    })
  }
}

async function updateEvent(req, res) {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!event) {
      return res.status(404).json({ message: 'Event not found'})
    };

    res.json(event)
  }catch(err) {
    res.status(400).json({
      message: 'could not update event', error: err.message
    })
  }
};

async function deleteEvent(req, re) {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id);

    if(!event) {
      return res.status(400).josn({
        message: 'Event not found'
      });
    }

    res.json({ message: 'Event deleted successfully '});
  } catch(err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}

module.exports = {
  getEvents, getUpcomingEvents, getEventById, createEvent, updateEvent, deleteEvent,
}