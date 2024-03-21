import { useEffect, useState } from "react";
import './Timers.css'

export default function Timer()
{
	const wedDate = new Date('2024-07-20 19:00');
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	const [days, setDays] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			//setSeconds(prevSeconds => (prevSeconds === 0 ? 60 : prevSeconds - 1));
			const c = wedDate - new Date();
			const d = new Date( c ) ;
			const d1 = Math.floor(c /86_400_000);
			setSeconds(d.getSeconds());
			setMinutes(d.getMinutes());
			setHours(d.getHours());
			setDays(d1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);	
	
	return(
		<>
			<div style={{color:'white', fontSize:'1.5em', fontWeight:'800', textAlign:'center'}} className="mb-3">
				Απομένουν:
			</div>
			<RoundClock duration={days} total={360} type={'Ημέρες'}/>
			<RoundClock duration={hours} total={24} type={'Ώρες'}/>
			<RoundClock duration={minutes} total={60} type={'Λεπτά'}/>
			<RoundClock duration={seconds} total={60} type={'Δευτερόλεπτα'}/>
		</>
	)
}




function RoundClock({duration, total, type})
{
	const [show, setShow] = useState(duration);

	useEffect(()=>{
		setShow(duration);
	},[duration]);
	

	
	return(
		<div className="clock-container">
			{
				[...Array(360)].map((_,index) => 
				<div 
					key={index}
					className={`line text-center ${index >= show * ( 360/total) ? 'visible' : ''}`}
					style={{ transform: `rotate(${index}deg)`, width: '1vw'  }}>
				</div>
				)
			}
			<div className="number">
				{show}
			</div>
			<div className="type">
				{type}
			</div>
		</div>
	)
}


function SquareClock({duration})
{
	const [show, setShow] = useState(duration);

	useEffect(()=>{
		setShow(duration);
	},[duration]);
	
	const generateClipPath = () => {
		const t = 100 - show * 100 / 60;
		return `inset(${0}% ${t}% ${0}% ${0}%)`;
	  };
	
	return(
		<div className="time-number">
			{show}
			<div 
			className="partial-border"
			style={{clipPath:generateClipPath()}}
			/>
		</div>
	)
}

