import db from "../db";
import {staff} from "../db/schema"

export async function insertStaff(firstName:string, lastName:string,role:string, phone:string, email:string){
    const newStaff = await db.insert(staff).values({
        firstName:firstName, 
        lastName:lastName,
        role:role,
        phone:phone,
        email:email, 
        //password:password

    })
}