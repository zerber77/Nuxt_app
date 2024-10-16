export default defineEventHandler(async (event)=>
{

    const scriptdb = event.context.$scriptdb

    const [rows]=await scriptdb.query("select * from randotable limit 5")

    console.log(rows);
})