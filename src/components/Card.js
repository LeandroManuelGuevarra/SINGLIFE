import React, { useState } from 'react'
import { Button, Dropdown, Col } from 'react-bootstrap';
import Swal from 'sweetalert2'

export default function Card({ slotName, charge, isActive, menuType, desc }){

	const [item, setItem] = useState(isActive);
	const [active, setActive] = useState(false)
	const [hours, setHours] = useState("");
	const [occupied, setOccupied] = useState(false)

	function checkHours(e){
		if(menuType !== ""){
			setItem(!item)
		}else{
			Swal.fire({
				title: 'Warning No Vehicle Type',
				text: 'Please add the type of your vehicle',
				icon: 'warning',
				showCancelButton: true,
				cancelButtonText: 'Exit'
			})
		}
		setHours(e.target.id);
	}

	function ParkHandler(){
		if(menuType !== ""){
			setOccupied(true)
			setActive(true)
			setItem(!item)
		}else{
			Swal.fire({
				title: 'Warning No Vehicle Type',
				text: 'Please add the type of your vehicle',
				icon: 'warning',
				showCancelButton: true,
				cancelButtonText: 'Exit'
			})
		}
		
	}

	function PayHandler(){
		if(hours !== ""){
			if((menuType === "SP" && hours > 3) && (menuType === "SP" && hours < 24)){
				Swal.fire({
				title: 'Pay Now1',
				text: `Your total parking hours is ${hours} your will pay P${(((hours - 3) * charge) + 40) }`,
				icon: 'warning',
				showCancelButton: true,
				cancelButtonText: 'PayNow'
				})
			}else if ((menuType === "MP" && hours > 3) && (menuType === "MP" && hours < 24)){
				Swal.fire({
				title: 'Pay Now2',
				text: `Your total parking hours is ${hours} your will pay P${(((hours - 3) * charge) + 40) }`,
				icon: 'warning',
				showCancelButton: true,
				cancelButtonText: 'PayNow'
				})
			}else if ((menuType === "LP" && hours > 3) && (menuType === "LP" && hours < 24)){
				Swal.fire({
				title: 'Pay Now3',
				text: `Your total parking hours is ${hours} your will pay P${(((hours - 3) * charge) + 40) }`,
				icon: 'warning',
				showCancelButton: true,
				cancelButtonText: 'PayNow'
				})
			}else if (((menuType === "SP" && hours > 3) && (menuType === "SP" && hours == 24))) {
				Swal.fire({
				title: 'Pay Now4',
				text: `Your total parking hours is ${hours} your will pay P5000`,
				icon: 'warning',
				showCancelButton: true,
				cancelButtonText: 'PayNow'
				})
			}else if (((menuType === "MP" && hours > 3) && (menuType === "MP" && hours == 24))) {
				Swal.fire({
				title: 'Pay Now4',
				text: `Your total parking hours is ${hours} your will pay P5000`,
				icon: 'warning',
				showCancelButton: true,
				cancelButtonText: 'PayNow'
				})
			}else if (((menuType === "LP" && hours > 3) && (menuType === "LP" && hours == 24))) {
				Swal.fire({
				title: 'Pay Now4',
				text: `Your total parking hours is ${hours} your will pay P5000`,
				icon: 'warning',
				showCancelButton: true,
				cancelButtonText: 'PayNow'
				})
			}else{
				Swal.fire({
				title: 'Pay Now5',
				text: `Your total parking hours is ${hours} your will pay P40`,
				icon: 'warning',
				showCancelButton: true,
				cancelButtonText: 'PayNow'
				})
			}
		}
		setItem(!item)
		setActive(false)
		setOccupied(false)
	}


	return(
		<React.Fragment>
		<Col xs={4}>
		<h2 className={occupied ? "text-secondary" : "text-info"}>{occupied ? "Occupied" : "Vacant"}</h2>
		<p className={active ? "bg-success p-4 m-2" : "bg-warning p-4 m-2"}>
		<span>slot name:</span><h1>{slotName}</h1>
		<p>Description: {desc} </p>
		   <Dropdown className="dropdownMenus" onClick={e => checkHours(e)}>
		     <Dropdown.Toggle variant="secondary btn-block">
		       {hours ? hours : 'Add Hours'}
		     </Dropdown.Toggle>

		     <Dropdown.Menu>
		       <Dropdown.Item id="3">3</Dropdown.Item>
		       <Dropdown.Item id="4">4</Dropdown.Item>
		       <Dropdown.Item id="5">5</Dropdown.Item>
		       <Dropdown.Item id="6">6</Dropdown.Item>
		       <Dropdown.Item id="7">7</Dropdown.Item>
		       <Dropdown.Item id="8">8</Dropdown.Item>
		       <Dropdown.Item id="9">9</Dropdown.Item>
		       <Dropdown.Item id="10">10</Dropdown.Item>
		       <Dropdown.Item id="11">11</Dropdown.Item>
		       <Dropdown.Item id="12">12</Dropdown.Item>
		       <Dropdown.Item id="13">13</Dropdown.Item>
		       <Dropdown.Item id="14">14</Dropdown.Item>
		       <Dropdown.Item id="15">15</Dropdown.Item>
		       <Dropdown.Item id="16">16</Dropdown.Item>
		       <Dropdown.Item id="17">17</Dropdown.Item>
		       <Dropdown.Item id="18">18</Dropdown.Item>
		       <Dropdown.Item id="19">19</Dropdown.Item>
		       <Dropdown.Item id="20">20</Dropdown.Item>
		       <Dropdown.Item id="21">21</Dropdown.Item>
		       <Dropdown.Item id="22">22</Dropdown.Item>
		       <Dropdown.Item id="23">23</Dropdown.Item>
		       <Dropdown.Item id="24">24</Dropdown.Item>
		     </Dropdown.Menu>
		   </Dropdown>
		   <br/>
		   <p>{ item
		   		? (menuType === "SP") 
		   			? <Button variant="info" onClick={ParkHandler}>Park</Button>
		   			: ((menuType === 'MP' && slotName === '1SP') || (menuType === 'MP' && slotName === '2SP') || (menuType === 'MP' && slotName === '3SP'))
		   				? <Button disabled={true}>Disabled</Button>
		   				: ((menuType === 'LP' && slotName === '1SP') || (menuType === 'LP' && slotName === '2SP') || (menuType === 'LP' && slotName === '3SP') || (menuType === 'LP' && slotName === '1MP') || (menuType === 'LP' && slotName === '2MP') || (menuType === 'LP' && slotName === '3MP'))
		   					? <Button disabled={true}>Disabled</Button>
		   					: <Button variant="info" onClick={ParkHandler}>Park</Button>
		   		: <Button variant="info" onClick={PayHandler}>Pay</Button>
		      }</p>
		   </p>
		   </Col>
		</React.Fragment>
	)
}