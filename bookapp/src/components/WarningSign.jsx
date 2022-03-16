import Alert from "react-bootstrap/Alert";

const WarningSign =(props)=> (
    <>
     
     <Alert variant="danger" >
        <Alert.Heading>
         This is a warning alert which has this props: {props.name}
        </Alert.Heading>
      </Alert>

      </>
)

export default WarningSign