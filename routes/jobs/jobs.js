const express = require('express');
const router = express.Router();
const NewJob = require('../../models/AdminJobs');


///ROUTES GET JOBS
router.get('/', (req, res) => {
    const jobs = NewJob.find()
    jobs.then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});

router.get('/:id', (req, res) => {
    const jobID = req.params.id;
    const jobs = NewJob.findById(jobID)
    jobs.then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});


///ROUTES POST JOBS
router.post('/new', (req, res) => {
    const newJob = new NewJob({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        requirements: req.body.requirements,
        salary: req.body.salary,
        number_of_kids: req.body.number_of_kids,
        sitter_skills: req.body.sitter_skills,
        schedule: req.body.schedule,
        salary_type: req.body.salary_type,
        id: req.body._id
    });

    newJob.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
});


//ROUTE EDIT JOB 
router.post('/edit/:id', (req, res) => {
    const jobID = req.params.id;

    const newtTitle = req.body.title;
    const newDescription = req.body.description;
    const newLocation = req.body.location;
    const newRequirements = req.body.requirements;
    const newSalary = req.body.salary;
    const new_number_of_kids= req.body.number_of_kids;
    const new_sitter_skills= req.body.sitter_skills;
    const newSchedule=req.body.schedule;
    const new_salary_type = req.body.
    NewJob.findById(jobID)
    .then(job => {
        job.title = newtTitle;
        job.description = newDescription;
        job.location = newLocation;
        job.requirements = newRequirements;
        job.salary = newSalary;
        job.number_of_kids = new_number_of_kids;
        job.new_sitter_skills = new_sitter_skills;
        job.newSchedule = newSchedule;
        job.salary_type = new_salary_type
        return job.save();
    }).then(result => {
        res.status(200).json({message:"job details updated"})
    })
    .catch(err => {
        res.json({message: err})
    })
});



//ROUTE DELETE JOB 
router.delete('/delete/:id', (req, res) => {
    const jobID = req.params.id;
    NewJob.findByIdAndRemove(jobID)
    .then(result => {
        res.json({message:"job was deleted"})
    })
    .catch(err => {
        res.json({message: err})
    })
});







module.exports = router;