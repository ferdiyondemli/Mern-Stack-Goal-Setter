 
const asyncHandler=require("express-async-handler")
const getGoals=async (req, res)=>{
    res.status(200).json({message: "get golas ready"})
    
    }

const setGoal=asyncHandler (async (req, res)=>{

    console.log(req.body)

    if(!req.body.text){
        res.status(400)
        throw new Error(`Please add a text`)
    }
    res.status(200).json({message: "set golas "})
    
    })
    

const updateGoal=asyncHandler (async (req, res)=>{
    res.status(200).json({message: `Update goal ${req.params.id}`})
    
    })

const deleteGoal=asyncHandler (async (req, res)=>{
    res.status(200).json({message: `delet goal ${req.params.id}`})
})

module.exports={ getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}

 