import { Card, CardContent, Typography, withStyles } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './Msg.css'

const Msg= forwardRef(({txt, username}, ref) => {
    const isUser= username === txt.username;

    const ColorTypography = withStyles({
  root: {
      color: isUser ? "#e9e9eb" : "#000000",
      fontFamily:   "Lucida Console"
    /* color: "#FFFFFF" */
  }
})(Typography);

    return (
        <div ref={ref} className={`msg ${isUser && 'msg__user'}`}>
            <Card className={isUser ? "msg__usercard" : "msg__guestcard"}>
            <CardContent>
                <ColorTypography variant="h6"  component="h2"> 
                   {!isUser && `${txt.username || 'Unknown'}:` } {txt.text}
                   {/* {txt.username} : {txt.text} */}
                </ColorTypography>
            </CardContent>
        </Card>
        </div>
        
        
          /*variant="h5" in typography*/
    )
})

export default Msg
