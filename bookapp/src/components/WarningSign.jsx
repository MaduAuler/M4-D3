import Alert from "react-bootstrap/Alert";

const WarningSign =(props)=> (
    <>
     
     <Alert variant="danger" >
        <Alert.Heading>
         {props}
        </Alert.Heading>
      </Alert>

      </>
)

export default WarningSign