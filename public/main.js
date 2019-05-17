function indexPage(){
    const indexButton = document.getElementById('index')
    const newButton = document.getElementById('newtab')
    newButton.style.backgroundColor = 'rgb(0, 152, 253)'
    newButton.style.color = 'lightgray'
    newButton.style.borderColor = 'lightgray'

    var targetArea = document.querySelector('.targetArea')

    const createIndexPage = document.createElement('div')
    createIndexPage.className = 'targetArea'
    createIndexPage.id = 'targetArea'

    const indexPageMain = document.getElementById('targetArea')
    // Construct layout.
    indexPageMain.innerHTML = (
        `<div class = 'contactList' id = 'contactList'>
            Contact List
        </div>
        <div class = 'headings'>
            <span class = 'num'>#</span>
            <span class = 'Name'>Name</span>
            <span class = 'Email'>Email</span>
            <span class = 'Phone'>Phone</span>
        </div>`
    )
    
    // Start counter.
    var idCounter = 1
    for(var i =0; i < localStorage.length; i++) {
        var targetData = JSON.parse(localStorage.getItem(localStorage.key(i)))

        var rowDiv = document.createElement('div')
        rowDiv.id = `rowDiv${idCounter}`
        rowDiv.className = 'rowDiv'

        // Construct row numbers.
        var CreateNumSpan = document.createElement('span')
        CreateNumSpan.className = 'numSpan'
        CreateNumSpan.id = `numSpan${idCounter}`
        // Construct row names.
        var CreateNameSpan = document.createElement('span')
        CreateNameSpan.className = 'nameSpan'
        // Construct row emails.
        var CreateEmailSpan = document.createElement('span')
        CreateEmailSpan.className = 'emailSpan'
        // Construct row phone numbers.
        var CreatePhoneSpan = document.createElement('span')
        CreatePhoneSpan.className = 'phoneSpan'

        // APPEND localStorage values to spans
        CreateNumSpan.append(targetData.indexNum)
        CreateNameSpan.append(targetData.nameInfo)
        CreateEmailSpan.append(targetData.emailInfo)
        CreatePhoneSpan.append(targetData.phoneInfo)

        // CREATE span to hold buttons
        var buttonSpan = document.createElement('div')
        buttonSpan.className = 'indexButtonSpan'

        // CREATE details button
        var indexDetailsBtn = document.createElement('input')
        indexDetailsBtn.type = 'button'
        indexDetailsBtn.id = `indexDetailsBtn${idCounter}`
        indexDetailsBtn.className = 'indexDetailsBtn'
        indexDetailsBtn.value = 'DETAILS'

        // CREATE edit button
        var indexEditBtn = document.createElement('input')
        indexEditBtn.type = 'button'
        indexEditBtn.id = 'indexEditBtn'
        indexEditBtn.className = 'indexEditBtn'
        indexEditBtn.value = 'EDIT'

        // CREATE delete button
        var indexDeleteBtn = document.createElement('input')
        indexDeleteBtn.type = 'button'
        indexDeleteBtn.id = 'indexDeleteBtn'
        indexDeleteBtn.className = 'indexDeleteBtn'
        indexDeleteBtn.value = 'DELETE'

        // APPEND buttons to button span
        buttonSpan.append(indexDetailsBtn)
        buttonSpan.append(indexEditBtn)
        buttonSpan.append(indexDeleteBtn)
        // APPEND data to a row.
        rowDiv.append(CreateNumSpan)
        rowDiv.append(CreateNameSpan)
        rowDiv.append(CreateEmailSpan)
        rowDiv.append(CreatePhoneSpan)
        rowDiv.append(buttonSpan)
        rowDiv.append(document.createElement('br'))
        // APPEND that one row to the index page table.
        indexPageMain.append(rowDiv)
    
        var recordInfo = {
            indexNum : targetData.indexNum,
            nameInfo : targetData.nameInfo,
            emailInfo : targetData.emailInfo,
            phoneInfo : targetData.phoneInfo
        }

        indexDetailsBtn.addEventListener('click',function(e){
            var parentRow = e.target.parentNode.parentNode
            var targetIndex = parentRow.children[0].innerHTML

            detailsPage(findRecord(targetIndex))
        })
        indexEditBtn.addEventListener('click',function(e){
            var parentRow = e.target.parentNode.parentNode
            var targetIndex = parentRow.children[0].innerHTML

            editPage(findRecord(targetIndex))
        })
        indexDeleteBtn.addEventListener('click',function(e){
            var parentRow = e.target.parentNode.parentNode
            parentRow.style.backgroundColor = 'lightgray'
            var dBtn = e.target
            dBtn.style.backgroundColor = 'rgba(255, 33, 33, 0.692)'
            dBtn.style.color = 'white'
            dBtn.style.fontWeight = 'bold'

            const iNum = e.target.parentNode.parentNode.children[0].innerHTML
            setTimeout(function(){removeItem(iNum,parentRow,dBtn)}, 10)  
        })
        // Increment counter by 1.
        idCounter++
    }
}
// Now call pre-defined function.
indexPage();

var highestIndexNum = 0
// Declare top header buttons.
const newButton = document.getElementById('newtab')
const indexBtn = document.getElementById('index')
// Declare node.
content = document.getElementById('content')

// Add new contact function.
newButton.addEventListener('click', function(e){
    const indexButton = document.getElementById('index')
    indexButton.style.backgroundColor = 'rgb(0, 152, 253)'
    indexButton.style.color = 'lightgray'
    indexButton.style.borderColor = 'lightgray'
    const newButton = document.getElementById('newtab')
    newButton.style.color = 'white'
    newButton.style.borderColor = 'white'
    newButton.style.backgroundColor = 'rgb(0, 173, 253)'

    const oldDiv = document.querySelector('.targetArea')
   
    const NewContactDiv = document.createElement('div')
    NewContactDiv.className = 'newContact'
    const NewContactText = document.createTextNode('New Contact')
    NewContactDiv.append(NewContactText)
    // NAME FORM
    var nameForm = document.createElement('input')
    nameForm.id = 'nameForm'
    nameForm.type = 'text'
    const nameLabel = document.createElement('div')
    nameLabel.className = 'formLabels'
    nameLabel.innerHTML = 'Name:'

    // EMAIL FORM
    const emailForm = document.createElement('input')
    emailForm.id = 'emailForm'
    emailForm.type = 'text'
    const emailLabel = document.createElement('div')    
    emailLabel.className = 'formLabels'
    emailLabel.innerHTML = 'Email:'

    // PHONE FORM
    const phoneForm = document.createElement('input')
    phoneForm.id = 'phoneForm'
    phoneForm.type = 'text'
    const phoneLabel = document.createElement('div')
    phoneLabel.className = 'formLabels'
    phoneLabel.innerHTML = 'Phone:'

    // SUBMIT BUTTON
    const submitButton = document.createElement('input')
    submitButton.type = 'button'
    submitButton.value = 'Submit'
    submitButton.id = 'submitButton'

    const forms = document.createElement('div')
    forms.className = 'forms'

    const mainDiv = document.createElement('div')
        mainDiv.id = 'targetArea'
        mainDiv.className = 'targetArea'

    content.replaceChild(mainDiv, oldDiv)
    mainDiv.append(NewContactDiv)
    forms.append(nameLabel)
    forms.append(nameForm)
    forms.append(emailLabel)
    forms.append(emailForm)
    forms.append(phoneLabel)
    forms.append(phoneForm)
    forms.append(document.createElement('br'))
    forms.append(submitButton)
    
    
    mainDiv.append(forms)

    //Insert submit button here. make type = button
    

    const name = document.getElementById('nameForm')
    const email = document.getElementById('emailForm')
    const phone = document.getElementById('phoneForm')

    
    submitButton.onclick = function(){
        const nameVal = name.value
        const emailVal = email.value
        const phoneVal = phone.value

        //name pattern check
        const nameRegEx = /^./
        const nameTest = nameRegEx.test(nameVal)
        var nameError = ''

        //email pattern check
        const emailRegEx = /.+@.+\..+/
        const emailTest = emailRegEx.test(emailVal)
        var emailError = ''

        //phone pattern check
        const phoneRegEx = /^[2-9][0-9]{9}$/
        const phoneTest = phoneRegEx.test(phoneVal)
        var phoneError = ''

        const userInfo = {
            indexNum : 0,//indexVal,
            nameInfo : nameVal,
            emailInfo : emailVal,
            phoneInfo : phoneVal

        }
        if (nameTest === false){
            var nameError = 'Error: Must enter name. '
        }
        if (emailTest === false){
            var emailError = 'Error: Invalid email address. '
        }
        if (phoneTest === false){
            var phoneError = 'Error: Invalid phone number. '
        }


        var errorMsg = nameError + emailError + phoneError
 
        if (errorMsg === ''){

            if (localStorage.length = 0){
                DBindexKey = 1
                userInfo.indexNum = 1
            }
            else{

                for(var i =0; i < localStorage.length; i++){  
                    //console.log(localStorage.getItem(localStorage.key(i)));  // this LOOP iterates through localStorage and logs value into console
                    var targetData = JSON.parse(localStorage.getItem(localStorage.key(i)))
                    //console.log('target data in for loop, in IF: '+ targetData.nameInfo)
                    if (targetData.indexNum > highestIndexNum){highestIndexNum = targetData.indexNum}
                    
                }

                DBindexKey = Number(highestIndexNum) + 1
                userInfo.indexNum = Number(highestIndexNum) + 1

            }

            localStorage.setItem(DBindexKey, JSON.stringify(userInfo))
            detailsPage(userInfo);

        }

        else{
            alert(errorMsg)

        }



    }
})

// View details of contact function.
function detailsPage(userInfo){ 
    const indexButton = document.getElementById('index')
    indexButton.style.backgroundColor = 'rgb(0, 152, 253)'
    indexButton.style.color = 'lightgray'
    indexButton.style.borderColor = 'lightgray'
    const newButton = document.getElementById('newtab')
    newButton.style.backgroundColor = 'rgb(0, 152, 253)'
    newButton.style.color = 'lightgray'
    newButton.style.borderColor = 'lightgray'

    var replaceThisDiv = document.querySelector('.targetArea')

    const displayInfoDiv = document.createElement('div')
    displayInfoDiv.id = 'targetArea'
    displayInfoDiv.className = 'targetArea'

    content.replaceChild(displayInfoDiv, replaceThisDiv)

    //create contact heading
    const contactHeading = document.createElement('div')
    contactHeading.id = 'contactHeadingDiv'
    const contactText = document.createTextNode('Contact #')
    contactHeading.append(contactText)
    
    const cIndexNum = userInfo.indexNum

    contactHeading.append(cIndexNum)

    //create name div
    const cName = document.createElement('div')
    cName.className = 'labels'
    const cNameText = document.createTextNode('Name: ')
    cName.append(cNameText)

    const dNameSpan = document.createElement('span')
    dNameSpan.className = 'values'

    dNameSpan.append(userInfo.nameInfo)
    cName.append(dNameSpan)

    //create email div
    const cEmail = document.createElement('div')
    cEmail.className = 'labels'
    const cEmailText = document.createTextNode('Email: ')
    cEmail.append(cEmailText)

    const dEmailSpan = document.createElement('span')
    dEmailSpan.className = 'values'

    dEmailSpan.append(userInfo.emailInfo)
    cEmail.append(dEmailSpan)

    // Create phone div
    const cPhone = document.createElement('div')
    cPhone.className = 'labels'
    const cPhoneText = document.createTextNode('Phone: ')
    cPhone.append(cPhoneText)

    const dPhoneSpan = document.createElement('span')
    dPhoneSpan.className = 'values'

    dPhoneSpan.append(userInfo.phoneInfo)
    cPhone.append(dPhoneSpan)

    // Create edit button
    const detailEditBtn = document.createElement('input')
    detailEditBtn.type = 'button'
    detailEditBtn.value = 'EDIT'
    detailEditBtn.className = 'detailEditBtn'
    detailEditBtn.id = 'detailEditBtn'

    // Create delete button
    const detailDeleteBtn = document.createElement('input')
    detailDeleteBtn.type = 'button'
    detailDeleteBtn.value = 'DELETE'
    detailDeleteBtn.className = 'deleteBtn'
    detailDeleteBtn.id = 'detailDeleteBtn'

    const detailsContent = document.createElement('div')
    detailsContent.className = 'detailsContent'

    displayInfoDiv.append(contactHeading)

    detailsContent.append(cName)
    detailsContent.append(cEmail)
    detailsContent.append(cPhone)
    displayInfoDiv.append(detailsContent)

    const detailsBtn = document.createElement('div')
    detailsBtn.className = 'detailsBtn'

    detailsBtn.append(detailEditBtn)
    detailsBtn.append(detailDeleteBtn)
    displayInfoDiv.append(detailsBtn)

    detailEditBtn.addEventListener('click', function(e){
        const iNum = document.getElementById('contactHeadingDiv').childNodes[1].nodeValue

        const subUserInfo = {
            indexNum : iNum,
            nameInfo : userInfo.nameInfo,
            emailInfo : userInfo.emailInfo,
            phoneInfo : userInfo.phoneInfo }
        editPage(subUserInfo)
    })
    
    detailDeleteBtn.addEventListener('click', function(e){
        const iNum = document.getElementById('contactHeadingDiv').childNodes[1].nodeValue

        const dBtn = e.target
        dBtn.style.backgroundColor = 'rgba(255, 33, 33, 0.692)'
        dBtn.style.color = 'white'
        dBtn.style.fontWeight = 'bold'

        setTimeout(function(){removeItem(iNum,undefined,dBtn)},10)
    })
}

// Edit contact function.
function editPage(userInfo){
    const indexButton = document.getElementById('index')
    indexButton.style.backgroundColor = 'rgb(0, 152, 253)'
    indexButton.style.color = 'lightgray'
    indexButton.style.borderColor = 'lightgray'
    const newButton = document.getElementById('newtab')
    newButton.style.backgroundColor = 'rgb(0, 152, 253)'
    newButton.style.color = 'lightgray'
    newButton.style.borderColor = 'lightgray'

    var replaceThisDiv = document.querySelector('.targetArea')

    const displayInfoDiv = document.createElement('div')
    displayInfoDiv.id = 'targetArea'
    displayInfoDiv.className = 'targetArea'

    content.replaceChild(displayInfoDiv, replaceThisDiv)

    // Construct contact heading.
    const contactHeading = document.createElement('div')
    contactHeading.id = 'contactHeadingDiv'
    const contactText = document.createTextNode('Edit Contact #')
    contactHeading.append(contactText)

    const cIndexNum = userInfo.indexNum
    contactHeading.append(cIndexNum)

    const editContent = document.createElement('div')
    editContent.className = 'editContent'

    // Create name div.
    const cName = document.createElement('div')
    cName.className = 'labels'
    const cNameText = document.createTextNode('Name: ')
    cName.append(cNameText)

    const cNameInputField = document.createElement('input')
    cNameInputField.value = userInfo.nameInfo
    cNameInputField.id = 'cNameInputField'
    cNameInputField.className = 'cNameInputField'

    // Construct email div.
    const cEmail = document.createElement('div')
    cEmail.className = 'labels'
    const cEmailText = document.createTextNode('Email: ')
    cEmail.append(cEmailText)

    const cEmailInputField = document.createElement('input')
    cEmailInputField.value = userInfo.emailInfo
    cEmailInputField.id = 'cEmailInputField'
    cEmailInputField.className = 'cEmailInputField'

    //create phone div
    const cPhone = document.createElement('div')
    cPhone.className = 'labels'
    const cPhoneText = document.createTextNode('Phone: ')
    cPhone.append(cPhoneText)

    const cPhoneInputField = document.createElement('input')
    cPhoneInputField.value = userInfo.phoneInfo
    cPhoneInputField.id = 'cPhoneInputField'
    cPhoneInputField.className = 'cPhoneInputField'

    //create SUBMIT button
    const editSubmitBtn = document.createElement('input')
    editSubmitBtn.type = 'button'
    editSubmitBtn.value = 'Submit'
    editSubmitBtn.className = 'editSubmitBtn'
    editSubmitBtn.id = 'editSubmitBtn'

    displayInfoDiv.append(contactHeading)

    editContent.append(cName)
    editContent.append(cNameInputField)
    editContent.append(cEmail)
    editContent.append(cEmailInputField)
    editContent.append(cPhone)
    editContent.append(cPhoneInputField)
    editContent.append(document.createElement('br'))
    editContent.append(editSubmitBtn)

    displayInfoDiv.append(editContent)

    //ADD EVENT LISTENER
    editSubmitBtn.addEventListener('click',function(e){
        const iNum = document.getElementById('contactHeadingDiv').childNodes[1].nodeValue
        const nameVal = cNameInputField.value

        //name pattern check
        const nameRegEx = /^./
        const nameTest = nameRegEx.test(nameVal)
        var nameError = ''

        //email pattern check
        const emailRegEx = /.+@.+\..+/
        const emailTest = emailRegEx.test(cEmailInputField.value)
        var emailError = ''

        //phone pattern check
        const phoneRegEx = /^[2-9][0-9]{9}$/
        const phoneTest = phoneRegEx.test(cPhoneInputField.value)
        var phoneError = ''

        const subUserInfo = {
            indexNum : iNum,
            nameInfo : nameVal,
            emailInfo : cEmailInputField.value,
            phoneInfo : cPhoneInputField.value }

        if (nameTest === false) {var nameError = 'Error: Must enter name. '}
        if (emailTest === false) {var emailError = 'Error: Invalid email address. '}
        if (phoneTest === false){var phoneError = 'Error: Invalid phone number. '}

        var errorMsg = nameError + emailError + phoneError

        if (errorMsg === ''){
            localStorage.setItem(iNum, JSON.stringify(subUserInfo))
            detailsPage(subUserInfo) 
        }
        else{
            alert(errorMsg)
        }
    })
}

indexBtn.addEventListener('click', function(e){
    var target = document.querySelector('.targetArea')
    indexPage(target);
})

// Loop through records to find specific contact.
function findRecord(indexNumber){
    for(var i =0; i < localStorage.length; i++){
        // Declare variables.
        var targetData = JSON.parse(localStorage.getItem(localStorage.key(i)))
        var storageKeyNum = localStorage.key(i)

        matchedRecord = localStorage.getItem(storageKeyNum)
       
        if (indexNumber == storageKeyNum){
            ParsedMatchedRecord = JSON.parse(matchedRecord)
             return ParsedMatchedRecord
        }
        else{
            console.log('no match @ i = '+ i)
        }
    }
}

// Delete contact function.
function removeItem(indexNumber, parentRow, dBtn){
    var confirmed = confirm('Delete this contact?')

    if (confirmed){
        localStorage.removeItem(indexNumber)
        const target = document.querySelector('.targetArea')
        indexPage(target)
    }
    else {
        if(parentRow != undefined){
            parentRow.style.backgroundColor = 'white'
        }
        if(dBtn != undefined){
            dBtn.style.backgroundColor = 'white'
            dBtn.style.fontWeight = 'normal'
            dBtn.style.color = 'rgba(255, 33, 33, 0.692)'
        }
    }

}