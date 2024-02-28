const mongoose = require('mongoose');
const orderModel = require('./models/order');
const orderData = require('./orderData');
const estudiantesData = require('./estudiantesData');
const estudianteModel = require('./models/estudiante');




const consultarBaseDeDatos = async (size)=>{
    await mongoose.connect(`mongodb+srv://angelpablocuevas1989:EghP7p3eTEtgWPyu@codercluster.5ny2sqo.mongodb.net/`)
    console.log('connected')

    let result; 

    /** insert */
    //result = await orderModel.insertMany(orderData)

    //result = await orderModel.find();

    // result = await orderModel.aggregate([
    //    {
    //        $match: {size: size}
    //    },
    //    {
    //        $group: {
    //            _id:'$name', 
    //            total: {$sum: '$quantity'},  
    //            promedio: {$avg: '$quantity'} 
    //         }
    //    },
    //    {
    //        $sort: {total: -1}
    //    },
    //    {
    //        $group: {_id: 1, orders: {$push: "$$ROOT" }}
    //    },
    //    {
    //        $project: {
    //            "_id": 0, 
    //             orders: "$orders"   
    //        }
    //    } 
   
    // ])

    //------------------------- ESTUDIANTES ------------ 

    //result = await estudianteModel.insertMany(estudiantesData)
    //result = await estudianteModel.find().count()

    /** 1 */
    // result = await estudianteModel.aggregate([
    //     {
    //         $group: {_id: "$grade", students: {$push: "$$ROOT"} }
    //     },
    //     {
    //         $sort: { _id: -1}
    //     }
    // ]) 

    /** 2 */

    // result = await estudianteModel.aggregate([
    //     {
    //         $group: {_id: '$group'}
    //     }
    // ])

    /** 3 */

    // result = await estudianteModel.aggregate([
    //     {
    //         $match: {group: '1B'}
    //     },
    //     {
    //         $group: {_id:1, promedio: {$avg: '$grade'} }
    //     }
    // ])

    /** 4 */

    // result = await estudianteModel.aggregate([
    //     {
    //         $match: {group: '1A'}
    //     },
    //     {
    //         $group: {_id:1, promedio: {$avg: '$grade'} }
    //     }
    // ])

    //** 5 */
    // result = await estudianteModel.aggregate([
    //     {
    //         $group: {_id:1, promedio: {$avg: '$grade'} }
    //     }
    // ])

    //** 6 */
    // result = await estudianteModel.aggregate([
    //     {
    //         $match: {gender: 'Male'}
    //     },
    //     {
    //         $group: {_id:1, promedio: {$avg: '$grade'} }
    //     }
    // ])

    /** 7 */

    result = await estudianteModel.aggregate([
        {
            $match: {gender: 'Female'}
        },
        {
            $group: {_id:1, promedio: {$avg: '$grade'} }
        }
    ])

    console.log(JSON.stringify(result, null, '\t'))
}

consultarBaseDeDatos();