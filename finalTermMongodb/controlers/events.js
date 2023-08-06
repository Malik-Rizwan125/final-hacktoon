import { v4 as uuid } from 'uuid'
import mongoose from 'mongoose'

// let events = [
//     {
//         id: uuid(),
//         name : 'Hakaton',
//         address : 'Faisalabad',
//         charges : 200,
//         contact : '0000000000',
//         date : '12/09/2023',
//         time : '7:45',
//         presentBy : 'Saylani',
//         description: 'this is descriptinon'
//     }
// ]

const eventSchema = new mongoose.Schema({
  name: String,
  address: String,
  charges: Number,
  contact: String,
  date: String,
  time: String,
  presentBy: String,
  description: String
});

const eventCollection = mongoose.model('events', eventSchema);


export const createEvent = async (req, res) => {
  // const event = req.body
  //console.log('data is ', event);
  // events.push({...event, id: uuid()});

  //   memory Code{
  //   events.push(req.body);
  // }
  try {

    const event = new eventCollection(req.body)
    const result = await event.save()
    // console.log('result is :', result);

    // const result = await event.find()
    // console.log('result is :', result);

    // events = [...events, {event, id:uuid()} ]
    res.send("Event Added Successfully")
  } catch (error) {
    console.log('error in adding event:', error.message);
    res.send('Error in Values')

  }
}

export const getEvents = async (req, res) => {
  try {
    const result = await eventCollection.find()
    
    // console.log('result is :', result);
    res.send(result)
  } catch (error) {
    console.log('error in get all events:', error.message);
  }
}

export const getEvent = async (req, res) => {
  //  const singleEvent = events.filter((event)=>event.id === req.params.id);
  //  res.send(singleEvent);
  try {
    const event = await eventCollection.findById(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    console.log('error in getting single event' , error.message);
  }

}

export const deleteEvent = async (req, res) => {
  // events = events.filter((event)=>event.id !== req.params.id);
  try {
     await eventCollection.deleteOne({ _id: req.params.id })
    res.send("Event Deleted SucessFully");
  } catch (error) {
    console.log('errro', error.message);
  }
}


export const updateEvent = async (req, res) => {
  // const event = events.find((event)=>event.id === req.params.id);

  // event.name =  req.body.name;
  // event.address = req.body.address;
  // event.charges = req.body.charges;
  // event.contact = req.body.contact;
  // event.date = req.body.date;
  // event.time = req.body.time;
  // event.description = req.body.description;
  // event.presentBy = req.body.presentBy

  // res.send("Event Updatted SucessFully");
  const id = req.params.id;
    
    await eventCollection.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send("Event updated successfully." )
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });

}