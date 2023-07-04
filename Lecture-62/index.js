try {
    console.log(prog)
    console.log('program run successfully!')
} catch (error) {
    console.log('facing some errors!')
    throw new ReferenceError('')
}


//program inside finally block will execute in every case
//whenever got error in try or whenever get error in catch don't care 
//execute means execute!
finally {
    console.log('this is end code of the program')
}