import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";


export default function CartCard() { 

    return (
        <div>
             <Card>
                    <CardHeader>
                        <CardTitle> Id. name. spice</CardTitle>
                        <CardDescription>Description </CardDescription>
                        <CardDescription>Price</CardDescription>
                    </CardHeader>
                </Card>
            
        </div>
    )
}