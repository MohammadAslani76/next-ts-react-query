"use client"

import {useQuery,useMutation,useQueryClient} from "@tanstack/react-query";
import {addData, fetchData} from "@/server/apiFunctions";

const queryClient = useQueryClient()

export default function Home() {

    // const { isPending, error, data : companyNames } = useQuery({
    //     queryKey : ['companyNames'],
    //     queryFn: fetchData
    // })

    const mutation = useMutation({
        mutationFn: addData,
        onSuccess : () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })

    // if (isPending) return (
    //     <div className="min-h-screen p-8">
    //         Loading...
    //     </div>
    // )
    //
    // if (error) return (
    //     <div className="min-h-screen p-8 text-red-500">
    //         Error
    //     </div>
    // )

    return (
        <div className="min-h-screen p-8">
            <button className="bg-red-300 p-2 rounded"
                    onClick={() => mutation.mutate({id: 5,name: "test"})}>
                add
            </button>
            {/*{*/}
            {/*    companyNames?.map(company => (*/}
            {/*        <p key={company.id}>{company.name}</p>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    );
}
