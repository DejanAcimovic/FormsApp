import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { css } from 'glamor'


function notify(message){
    toast(message, {
        position: toast.POSITION.TOP_CENTER,
        className: css({
            background: '#b71c1c',
            color: 'white'
          }),
          progressClassName: css({
            background: 'grey'
          })
        })
}

export default notify