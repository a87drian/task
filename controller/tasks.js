const Task = require('../models/Task')


const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({status:'success', data: {tasks, nbHits: tasks.length}})
  } catch (error) {
    res.status(500).json({msg: error})
    
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create( req.body )
    res.status(201).json({task})
    
  } catch (error) {
    res.status(500).json({msg: error})
    
  }
};
const getTask = async (req, res) => {
  console.log('getTask')
  try {
    const {id: taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    
    if(!task){
      return res.status(404).json({msg: `No task with id: ${taskID}`})

    }else{
      return res.status(200).json(task)

    }
  } catch (error) {
    res.status(500).json({msg: error})
    
  }
  res.json({ id: req.params.id })
};
const deleteTask = async (req, res) => {
  try {
    const {id: taskID} = req.params
    const task = await Task.findByIdAndDelete({_id:taskID})

    if(!task){
      return res.status(404).json({msg: `No task with id: ${taskID}`})
      
    }
    return res.status(200).json({task: null, status:'success'})
    
    
    
  } catch (error) {
    res.status(500).json({msg: error})
    
  }
};
const updateTask = async (req, res) => {
  try {
    const {id: taskID } = req.params
    const task = await Task.findByIdAndUpdate({_id: taskID}, req.body,{
      new:true,
      runValidators: true
    })
    if(!task){
      return res.status(404).json({msg: `No task with id: ${taskID}`})

    }
    return res.status(200).json({task})
    
  } catch (error) {
    res.status(500).json({msg: error})
    
  }
};

const editTask = async (req, res) => {
  try {
    const {id: taskID } = req.params
    const task = await Task.findByIdAndUpdate({_id: taskID}, req.body,{
      new:true,
      runValidators: true
    })
    if(!task){
      return res.status(404).json({msg: `No task with id: ${taskID}`})

    }
    return res.status(200).json({task})
    
  } catch (error) {
    res.status(500).json({msg: error})
    
  }
};

module.exports = {
  getAllTasks,createTask,getTask,updateTask,deleteTask,editTask
};
