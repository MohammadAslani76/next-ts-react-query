"use client"

import {useQuery,useMutation,useQueryClient, QueryClient} from "@tanstack/react-query";
import {addData, fetchData,CompanyType} from "@/server/apiFunctions";
import Counter from "./components/counter";

export default function Home() {

    const queryClient : QueryClient = useQueryClient()

    const { isLoading, error, data : companyNames } = useQuery<CompanyType[],Error>({
        queryKey : ['companyNames'],
        queryFn: fetchData
    })

    const mutation = useMutation({
        mutationFn: addData,
        onSuccess : () => {
            queryClient.invalidateQueries({ queryKey: ['companyNames'] })
        }
    })

    if (isLoading) return (
        <div className="min-h-screen p-8">
            Loading...
        </div>
    )
    
    if (error) return (
        <div className="min-h-screen p-8 text-red-500">
            Error {error.message}
        </div>
    )

    return (
        <div className="min-h-screen p-8">
            <button 
                className={`p-2 rounded ${mutation.isPending ? 'bg-gray-300' : 'bg-red-300'}`}
                disabled={mutation.isPending}
                onClick={() => mutation.mutate({id: 6, name: "شرکت شش"})}>
                {mutation.isPending ? 'Adding...' : 'Add'}
            </button>
            {mutation.isError && (
                <p className="text-red-500">Error adding company</p>
            )}
            {
                companyNames?.map((company: CompanyType) => (
                    <p key={company.id}>{company.name}</p>
                ))
            }
            <Counter />
        </div>
    );
}
