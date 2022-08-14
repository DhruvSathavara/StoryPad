import React, { useState, useEffect } from "react";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import { useMoralis, useMoralisQuery } from "react-moralis";
import { BookContext } from "../Context/BookContext";
import { v4 as uuidv4 } from "uuid";
import ImageUploading from "react-images-uploading";
import html2canvas from "html2canvas";
import ChildContractAbi from "../abi/mintContract.json";
import { ethers } from "ethers";
require("dotenv").config({ path: "./.env" });

const axios = require('axios'); 

function UploadForm() {
const {Moralis,account,isAuthenticated} = useMoralis();

useEffect(() => {
    const checkBalance = async() =>{
  
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
  
      const address = accounts[0];
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(address);
      const query = new Moralis.Query("storyPadData");
      // query.equalTo("objectId",id);
      const object = await query.first();
  console.log(object.attributes.tokenContractAddress,"result")
  const tokenAddres = object.attributes.tokenContractAddress;
      const storyContract = new ethers.Contract(
        tokenAddres,
        ChildContractAbi.abi,
        signer
      );
      let balance = await storyContract.balanceOf(accounts[0]);
      if (balance.toString() !== "0") {
        console.log("Successfully Signed In as a Member!!");
   } else {
     console.log("You are not a member!!");
   }
    }
  checkBalance()
    }
    ,[])
console.log(account);

    const [name, setName] = useState('');
    const [ammount, setAmmount] = useState('');
    const [category, setCategory] = useState("Fanfiction");
    const [provide, setProvide] = useState("Free");
    const [coverPic, setCoverPic] = useState(null);
    const [website, setWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [checkbox, setCheckbox] = useState();
    const [ NFTHolder, setNFTHolder] = useState("");
    const [ NotNFTHolder, setNotNFTHolder] = useState("");
    const [ chargeble, setChargeble ] = useState("");
    const [ discount, setDiscount ] = useState("");
    const[data, setData] = useState()

    const nameEvent = (e) => {
        setName(e.target.value)
    }
    const ammountEvent = (e) => {
        setAmmount(e.target.value)
    }
    

    const descriptionEvent = (e) => {
        setDescription(e.target.value)
    }

    const contentEvent = (e) => {
        setContent(e.target.value)
    }

    async function coverEvent(e){
        const file = e.target.files[0];
      var url = await storeFile(file);
      setCoverPic(url);
    }

    const checkboxEvent = (e) => {
        setCheckbox(e.target.checked)
    }
   
    let Item = {
        name: name,
        category: category,
        coverPicture:coverPic,
        website: website,
        description: description,
        content:content,
        provide:provide,
        checkbox: checkbox,
        chargeble : chargeble,
        discount : discount,
        walletAddress:localStorage.getItem("currentUserAddress")
    }
    console.log(Item);
console.log(localStorage.getItem("currentUserAddress"))
    
    function onFormSubmit(e) {
        e.preventDefault() 
        // addData();
        storeFiles(Item)
       
        setName('');
        setCategory('');
        setCoverPic(null);
        setWebsite('');
        setProvide('');
        setContent('');
        setDescription('');
        setCheckbox(null);
        setChargeble("");
        setDiscount("");
       
    }
   

// Web3Storage

const bookContext = React.useContext(BookContext);
const {addData, storeFiles,storeFile,Image,storePdfFile,pdf} = bookContext;

const API_Token = process.env.REACT_APP_WEB3STORAGE_TOKEN;
const client = new Web3Storage({ token: API_Token})

//Moralis


    return (
        <div style={{ backgroundColor: "aliceblue" , marginTop:"77px" }} className="col">
            <div className="form-style-2 offset-4 row-8">
                <div className="form-style-2-heading">Share Your Story</div>
                <form action="" method="" onSubmit={onFormSubmit}>
                    <label for="field1"><span>Title <span className="required">*</span></span><input value={name} onChange={nameEvent} placeholder="File name" type="text" class="input-field" name="field1" /></label>

                    <label for="field4"><span>Category <span className="required">*</span></span><select value={category} name="field4" onChange={(e)=>setCategory(e.target.value)} className="select-field">
                        <option defaultChecked defaultValue="Fanfiction" value="Fanfiction">Fanfiction</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Romance">Romance</option>
                        <option value="Historical">Historical</option>
                        <option value="Paranormal">Paranormal</option>
                        <option value="Sequels">Sequels</option>
                        <option value="New adult">New adult</option>
                        <option value="Science fiction">Science fiction</option>
                        <option value="Wild card">Wild card</option>
                        <option value="Young adult">Young adult</option>

                    </select></label>

                
                   
                    <label for="field6"><span>Add a Cover <span className="required">*</span></span><input className="file-input" value={undefined} onChange={coverEvent} type="file"></input></label>

            <label for="field5"><span>Description <span className="required">*</span></span><textarea value={description} onChange={descriptionEvent} name="field5" className="textarea-field"></textarea></label>


            <label for="field5"><span>Write content <span className="required">*</span></span><textarea value={content} onChange={contentEvent} name="field5" className="textarea-field-content"></textarea></label>

          
            <label for="field4"><span>For not NFT Holder</span><select value={ NFTHolder} name="field4" onChange={(e)=>setNFTHolder(e.target.value)} className="select-field">
                        <option>Choose an option</option>
                        <option value="Free">Free</option>
                        <option value="Chargeble">Chargeble</option>
                        </select>
                          { 
                            NFTHolder == "Chargeble" ? (
                                


            <input
              value={chargeble}
              onChange={(e)=>setChargeble(e.target.value)}
              placeholder="Enter price in matic"
              type="text"
              class="input-field"
              name="field1"
            />  
                            

                            ) : ""
                        }
                   </label>

                    <label for="field4"><span>For NFT Holder</span><select value={NotNFTHolder } name="field4" onChange={(e)=>setNotNFTHolder(e.target.value)} className="select-field">
                        <option>Choose an option</option>
                        <option value="Free">Free</option>
                        <option value="Discount">Discount price</option>
                    </select>
                    { 
                      NotNFTHolder == "Discount" ? (
            
             
            <input
              value={discount}
              onChange={(e)=>setDiscount(e.target.value)}
              placeholder="Enter price in matic"
              type="text"
              class="input-field"
              name="field1"
            />  

                            ) : ""
                        }
                    </label>         

                    <label><input className="terms-checkbox" value={checkbox} onChange={checkboxEvent} type="checkbox"></input>I agree to terms and conditions.</label>


                    <label><span> </span><input type="submit" value="Submit" /></label>
                </form>
            </div>
        </div>
    )
}


export default UploadForm;