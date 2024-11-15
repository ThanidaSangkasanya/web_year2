import { revalidatePath } from "next/cache";
import prisma from "utils/db";


export default async function Page() {
    //const title = "My Test title"
    // await prisma.todo.create({ data: {title, done: false}})


    const data = await prisma.guitarmodel.findMany();
    console.log(data)

    async function createGuitar(formData: FormData) {
        "use server";
        const name = formData.get("name") as string;
        const brand = formData.get("brand") as string;
        const price = parseFloat(formData.get("price") as string);

        // Create a new guitar entry in the database
        await prisma.guitarmodel.create({
            data: {
                name,
                brand,
                price
            }
        });
        revalidatePath('/hw10')
    }


    return (
        <div className="flex flex-col bg-gradient-to-b from-[#05445e] to-[#75e6da] min-h-screen items-center justify-start ">
            <h1 className="text-4xl font-bold text-white m-5">Guitar shop</h1>


            <div className="bg-[#189ab4] border-1 border-black m-12 p-3">
                <form action={createGuitar}>
                    <label>Name :</label>
                    <input type="text" name="name" className="border-2 border-black m-2" placeholder="Guitar Name" required />

                    <label>Brand :</label>
                    <input type="text" name="brand" className="border-2 border-black m-2" placeholder="Guitar Brand" required />

                    <label>Price :</label>
                    <input type="number" name="price" className="border-2 border-black m-2" placeholder="Guitar Price" required />

                    <button type="submit" className="border-2 border-black m-2">Add Guitar</button>
                </form>
            </div>

            <div>
                {data.map((guitar) => (
                    <div key={guitar.id}>

                        <article className="group">
                            <img
                                alt=""
                                src="https://plus.unsplash.com/premium_photo-1681396937086-8a28edd8d257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpdGFyfGVufDB8fDB8fHww"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">
                                <a href="#">
                                    <h3 className="text-lg font-medium text-gray-900">{guitar.name}</h3>
                                </a>

                                <p className="font-bold mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Detail
                                </p>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"> 
                                    Brand : {guitar.brand}
                                </p>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"> 
                                    Price : {guitar.price}
                                </p>
                            </div>
                        </article>
                    </div>
                ))}

            </div>
        </div>
    )
}
/*
{data.map((guitar) => (
                    <div key={guitar.id}>
                        <p>Name: {guitar.name}</p>
                        <p>Brand: {guitar.brand}</p>
                        <p>Price: {guitar.price}</p>
                    </div>
                ))}
#189ab4
#75e6da
 * white #d4f1f4

 */

// {<h1>Sample DB </h1>
{/*JSON.stringify(data)*/ }
/**     <div>
         {
             data.map( (item) => (
                 <div key={item.id}>{item.name}
                 :
                 {(item.done)?"Yes" : "No"}
                 </div>
             ))
         }
     </div>
     <hr />
     <div>
         <h2>Add task</h2>
         <form action={createTask}>
         <input className="border-2 border-black" type="text" name="title" />
         <button type="submit">Add</button>
         </form>
     </div>}
*/