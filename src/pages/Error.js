import { useRouteError } from "react-router-dom"
import PageContent from "../components/PageContent"


function ErrorPage() {
    const error = useRouteError();
    console.log(JSON.parse(error.data).messgae)
    let title = "An error occurred."
    let messgae = "Something went wrong!"
    if(error.status === 500){
        messgae = JSON.parse(error.data).messgae
    }
    if(error.status === 404){
        console.log(error)
        title = "Not Found!"
        messgae = "Could not find resource or page"
    }
    return (
        <PageContent title= {title}>
            <p>{messgae}</p>
        </PageContent>
    )
}

export default ErrorPage