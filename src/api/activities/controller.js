import { success, notFound } from '../../services/response/'
import { Activities } from '.'
import { sendMail } from '../../services/sendgrid'

export const create = ({ bodymen: { body } }, res, next) =>
  Activities.create(body)
    .then((activities) => {

      let newContact = activities.view(true)
      console.log(newContact)

      let topic = newContact.topic === '1' ? 'Growth Hacking' : 'Desarrollo Móvil'

      let email = 'hola@wingsoft.com'
      let subject = topic+':  '+newContact.email+', necesita una evaluación.'
      //Mailing
      const content = `
        Hola soy ${newContact.name}, vi la pagina de ${topic}.<br><br>
        Estoy interesado en obtener una evaluación para la compañia ${newContact.bussinessName}, en la seccion de ${newContact.bussinessArea}. <br>
        Mi correo es ${newContact.email}, y mi numero ${newContact.phone} para que puedas ponerte en contacto cuanto antes conmigo.<br><br>`

      email = 'fmoya@wingsoft.com'

      let mail3 =sendMail({ toEmail: email, subject: subject, content: content })
      let mail = sendMail({ toEmail: email, subject: subject, content: content })



      // Mail for contact
      topic = newContact.topic === '1' ? 'Growth Hacking' : 'Desarrollo Móvil'
      email = newContact.email
      subject = `${newContact.name}, pronto nos pondremos en contacto contigo por ${topic}.`
      //Mailing
      const content2 = `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>*|MC:SUBJECT|*</title>
        
    <style type="text/css">
    p{
      margin:10px 0;
      padding:0;
    }
    table{
      border-collapse:collapse;
    }
    h1,h2,h3,h4,h5,h6{
      display:block;
      margin:0;
      padding:0;
    }
    img,a img{
      border:0;
      height:auto;
      outline:none;
      text-decoration:none;
    }
    body,#bodyTable,#bodyCell{
      height:100%;
      margin:0;
      padding:0;
      width:100%;
    }
    .mcnPreviewText{
      display:none !important;
    }
    #outlook a{
      padding:0;
    }
    img{
      -ms-interpolation-mode:bicubic;
    }
    table{
      mso-table-lspace:0pt;
      mso-table-rspace:0pt;
    }
    .ReadMsgBody{
      width:100%;
    }
    .ExternalClass{
      width:100%;
    }
    p,a,li,td,blockquote{
      mso-line-height-rule:exactly;
    }
    a[href^=tel],a[href^=sms]{
      color:inherit;
      cursor:default;
      text-decoration:none;
    }
    p,a,li,td,body,table,blockquote{
      -ms-text-size-adjust:100%;
      -webkit-text-size-adjust:100%;
    }
    .ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
      line-height:100%;
    }
    a[x-apple-data-detectors]{
      color:inherit !important;
      text-decoration:none !important;
      font-size:inherit !important;
      font-family:inherit !important;
      font-weight:inherit !important;
      line-height:inherit !important;
    }
    #bodyCell{
      padding:10px;
    }
    .templateContainer{
      max-width:600px !important;
    }
    a.mcnButton{
      display:block;
    }
    .mcnImage,.mcnRetinaImage{
      vertical-align:bottom;
    }
    .mcnTextContent{
      word-break:break-word;
    }
    .mcnTextContent img{
      height:auto !important;
    }
    .mcnDividerBlock{
      table-layout:fixed !important;
    }
    body,#bodyTable{
      background-color:#ffffff;
    }
    #bodyCell{
      border-top:0;
    }
    .templateContainer{
      border:0;
    }
  
    h1{
      color:#202020;
      font-family:Helvetica;
      font-size:26px;
      font-style:normal;
      font-weight:bold;
      line-height:125%;
      letter-spacing:normal;
      text-align:left;
    }

    h2{
      color:#202020;
      font-family:Helvetica;
      font-size:22px;
      font-style:normal;
      font-weight:bold;
      line-height:125%;
      letter-spacing:normal;
      text-align:left;
    }
  
    h3{
      color:#202020;
      font-family:Helvetica;
      font-size:20px;
      font-style:normal;
      font-weight:bold;
      line-height:125%;
      letter-spacing:normal;
      text-align:left;
    }
  
    h4{
      color:#202020;
      font-family:Helvetica;
      font-size:18px;
      font-style:normal;
      font-weight:bold;
      line-height:125%;
      letter-spacing:normal;
      text-align:left;
    }
  
    #templatePreheader{
      background-color:#ffffff;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:9px;
      padding-bottom:9px;
    }
  
    #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
      color:#656565;
      font-family:Helvetica;
      font-size:12px;
      line-height:150%;
      text-align:left;
    }
  
    #templatePreheader .mcnTextContent a,#templatePreheader .mcnTextContent p a{
      color:#656565;
      font-weight:normal;
      text-decoration:underline;
    }
  
    #templateHeader{
      background-color:#FFFFFF;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:9px;
      padding-bottom:0;
    }
  
    #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
      color:#202020;
      font-family:Helvetica;
      font-size:16px;
      line-height:150%;
      text-align:left;
    }
  
    #templateHeader .mcnTextContent a,#templateHeader .mcnTextContent p a{
      color:#2BAADF;
      font-weight:normal;
      text-decoration:underline;
    }
  
    #templateBody{
      background-color:#ffffff;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:9px;
      padding-bottom:0;
    }
  
    #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
      color:#202020;
      font-family:Helvetica;
      font-size:16px;
      line-height:150%;
      text-align:left;
    }
  
    #templateBody .mcnTextContent a,#templateBody .mcnTextContent p a{
      color:#2BAADF;
      font-weight:normal;
      text-decoration:underline;
    }
  
    #templateColumns{
      background-color:#ffffff;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:2px none #EAEAEA;
      padding-top:0;
      padding-bottom:9px;
    }
  
    #templateColumns .columnContainer .mcnTextContent,#templateColumns .columnContainer .mcnTextContent p{
      color:#202020;
      font-family:Helvetica;
      font-size:16px;
      line-height:150%;
      text-align:left;
    }
  
    #templateColumns .columnContainer .mcnTextContent a,#templateColumns .columnContainer .mcnTextContent p a{
      color:#2BAADF;
      font-weight:normal;
      text-decoration:underline;
    }
  
    #templateFooter{
      background-color:#ffffff;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:9px;
      padding-bottom:9px;
    }
  
    #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
      color:#656565;
      font-family:Helvetica;
      font-size:12px;
      line-height:150%;
      text-align:center;
    }
  
    #templateFooter .mcnTextContent a,#templateFooter .mcnTextContent p a{
      color:#656565;
      font-weight:normal;
      text-decoration:underline;
    }
  @media only screen and (min-width:768px){
    .templateContainer{
      width:600px !important;
    }

} @media only screen and (max-width: 480px){
    body,table,td,p,a,li,blockquote{
      -webkit-text-size-adjust:none !important;
    }

} @media only screen and (max-width: 480px){
    body{
      width:100% !important;
      min-width:100% !important;
    }

} @media only screen and (max-width: 480px){
    #bodyCell{
      padding-top:10px !important;
    }

} @media only screen and (max-width: 480px){
    .columnWrapper{
      max-width:100% !important;
      width:100% !important;
    }

} @media only screen and (max-width: 480px){
    .mcnRetinaImage{
      max-width:100% !important;
    }

} @media only screen and (max-width: 480px){
    .mcnImage{
      width:100% !important;
    }

} @media only screen and (max-width: 480px){
    .mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
      max-width:100% !important;
      width:100% !important;
    }

} @media only screen and (max-width: 480px){
    .mcnBoxedTextContentContainer{
      min-width:100% !important;
    }

} @media only screen and (max-width: 480px){
    .mcnImageGroupContent{
      padding:9px !important;
    }

} @media only screen and (max-width: 480px){
    .mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
      padding-top:9px !important;
    }

} @media only screen and (max-width: 480px){
    .mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
      padding-top:18px !important;
    }

} @media only screen and (max-width: 480px){
    .mcnImageCardBottomImageContent{
      padding-bottom:9px !important;
    }

} @media only screen and (max-width: 480px){
    .mcnImageGroupBlockInner{
      padding-top:0 !important;
      padding-bottom:0 !important;
    }

} @media only screen and (max-width: 480px){
    .mcnImageGroupBlockOuter{
      padding-top:9px !important;
      padding-bottom:9px !important;
    }

} @media only screen and (max-width: 480px){
    .mcnTextContent,.mcnBoxedTextContentColumn{
      padding-right:18px !important;
      padding-left:18px !important;
    }

} @media only screen and (max-width: 480px){
    .mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
      padding-right:18px !important;
      padding-bottom:0 !important;
      padding-left:18px !important;
    }

} @media only screen and (max-width: 480px){
    .mcpreview-image-uploader{
      display:none !important;
      width:100% !important;
    }

} @media only screen and (max-width: 480px){
    h1{
      font-size:22px !important;
      line-height:125% !important;
    }

} @media only screen and (max-width: 480px){
    h2{
      font-size:20px !important;
      line-height:125% !important;
    }

} @media only screen and (max-width: 480px){
    h3{
      font-size:18px !important;
      line-height:125% !important;
    }

} @media only screen and (max-width: 480px){
    h4{
      font-size:16px !important;
      line-height:150% !important;
    }

} @media only screen and (max-width: 480px){
    .mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
      font-size:14px !important;
      line-height:150% !important;
    }

} @media only screen and (max-width: 480px){
    #templatePreheader{
      display:block !important;
    }

} @media only screen and (max-width: 480px){
    #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
      font-size:14px !important;
      line-height:150% !important;
    }

} @media only screen and (max-width: 480px){
    #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
      font-size:16px !important;
      line-height:150% !important;
    }

} @media only screen and (max-width: 480px){
    #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
      font-size:16px !important;
      line-height:150% !important;
    }

} @media only screen and (max-width: 480px){
    #templateColumns .columnContainer .mcnTextContent,#templateColumns .columnContainer .mcnTextContent p{
      font-size:16px !important;
      line-height:150% !important;
    }

} @media only screen and (max-width: 480px){
    #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
      font-size:14px !important;
      line-height:150% !important;
    }

}</style></head>
    <body>
      <span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span><!--<![endif]-->
    
        <center>
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
                <tr>
                    <td align="center" valign="top" id="bodyCell">
            
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
              <tr>
                <td valign="top" id="templatePreheader"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
    <tbody class="mcnImageBlockOuter">
            <tr>
                <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                    <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                        <tbody><tr>
                            <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0; text-align:center;">
                                
                                    
                                        <img align="center" alt="" src="https://gallery.mailchimp.com/9090d248fbc6516412f14b6dd/images/f2ed0df4-a3cf-441c-9482-ba0865246036.png" width="600" style="max-width:1000px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                    
                                
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    </tbody>
</table></td>
              </tr>
              <tr>
                <td valign="top" id="templateHeader"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                    <tbody><tr>
                        
                        <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px; text-align: left;">
                        
                            <div style="padding: 0 12%;">
<h3 style="color: #5E605F">¡Hola ${newContact.name}!</h3>

<p style="color: #5E605F;text-align: left;">En Wingsoft, queremos brindarte la mejor experiencia<br>
en todo el proceso que va desde la solicitud de evaluación<br>
hasta el desarrolo de tu proyecto.<br>
<br>
Es por eso que te contactaremos para poder hacer un<br>
levantamiento de la información necesaria para entregar<br>
una evaluación de tu proyecto, que contemple todos los<br>
alcances necesarios.<br>
<br>
Para que sea más cómodo para ti, tenemos dos opciones.<br>
Vía Email o Vía Teléfono, si tu opción es vía Email no es<br>
necesario que respondas este email. Si es por teléfono, te<br>
invitamos a agendar un horario que te acomode aquí:<br>
<a href="https://bit.ly/2HwUCIZ" style="text-decoration: none; color: #5E605F;">https://bit.ly/2HwUCIZ</a><br>
<br>
Te deseamos un gran día.</p>
</div>

                        </td>
                    </tr>
                </tbody></table>
        
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
    <tbody class="mcnImageBlockOuter">
            <tr>
                <td valign="top" style="padding:9px" class="mcnImageBlockInner">
                    <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                        <tbody><tr>
                            <td class="mcnImageContent" valign="top" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">
                                
                                    
                                        <img align="center" alt="" src="https://gallery.mailchimp.com/9090d248fbc6516412f14b6dd/images/afc46e05-37bd-4faf-8a21-9687d9037f51.png" width="200" style="max-width:200px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                    
                                
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    </tbody>
</table></td>
              </tr>
              <tr>
                <td valign="top" id="templateBody"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
    <tbody class="mcnImageBlockOuter">
            <tr>
                <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                    <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                        <tbody><tr>
                            <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0; text-align:center;">
                                
                                    
                                        <img align="center" alt="" src="https://gallery.mailchimp.com/9090d248fbc6516412f14b6dd/images/0d51a223-cb9e-413c-83be-178e1cec03ac.jpg" width="600" style="max-width:1000px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                    
                                
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    </tbody>
</table></td>
              </tr>
              <tr>
                <td valign="top" id="templateColumns">
                  
                  <table align="left" border="0" cellpadding="0" cellspacing="0" width="300" class="columnWrapper">
                    <tr>
                      <td valign="top" class="columnContainer"></td>
                    </tr>
                  </table>
                  
                  <table align="left" border="0" cellpadding="0" cellspacing="0" width="300" class="columnWrapper">
                    <tr>
                      <td valign="top" class="columnContainer"></td>
                    </tr>
                  </table>
                  
                </td>
              </tr>
              <tr>
                <td valign="top" id="templateFooter"></td>
              </tr>
            </table>
            
                    </td>
                </tr>
            </table>
        </center>
    </body>
</html>


      `



      console.log(content2)


      let mail2 = sendMail({ toEmail: email, subject: subject, content: content2 })

      let resultMailing = mail && mail2 && mail3

      return { activities: activities.view(true), emailSended: resultMailing }
    })
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Activities.count(query)
    .then(count => Activities.find(query, select, cursor)
      .then((activities) => ({
        count,
        rows: activities.map((activities) => activities.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Activities.findById(params.id)
    .then(notFound(res))
    .then((activities) => activities ? activities.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Activities.findById(params.id)
    .then(notFound(res))
    .then((activities) => activities ? Object.assign(activities, body).save() : null)
    .then((activities) => activities ? activities.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Activities.findById(params.id)
    .then(notFound(res))
    .then((activities) => activities ? activities.remove() : null)
    .then(success(res, 204))
    .catch(next)
