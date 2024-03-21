import Timer from "./Timers";
import './Invitation.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";

export default function Invitation()
{
	const [finished, setFinished] = useState(false);
	const [activeSection, setActiveSection] = useState(null);
	const observer = useRef(null);

	useEffect( ()=>
	{
		observer.current = new IntersectionObserver((entries) =>
		{
			const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
			if (visibleSection)
				setActiveSection(visibleSection.id);
		});

		const sections = document.querySelectorAll('[data-section]');
		sections.forEach(element => {
			observer.current.observe(element);
		});

		const handleLoad = () => {
			setTimeout(() => {setFinished(true)}, 750); 
		}
		if( document.readyState === 'complete' )
		{
			setFinished(true);
			return () =>
			{
				sections.forEach(element => {
					observer.current.unobserve(element);
				});
			}
		}
		else
		{
			window.addEventListener('load', handleLoad);
			return () =>
			{
				sections.forEach(element => {
					observer.current.unobserve(element);
				});
				window.removeEventListener('load', handleLoad);
			}
		}
				


	},[]);
	

	const activeStyle = {
		fontWeight: 'bold',
		color: 'white',
	};

    return(
    <>

		<Navbar bg="dark" data-bs-theme="dark" sticky="top"  >
			<Container>
			<Navbar.Brand className="zen-antique-soft-regular" href="#start">Θ Χ</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="#section1" style={activeSection === 'section1' ? activeStyle : {} }>Τελετή</Nav.Link>
				<Nav.Link href="#section2" style={activeSection === 'section2' ? activeStyle : {} }>Δεξίωση</Nav.Link>
			</Nav>
			</Container>
		</Navbar>

			<Container className={finished ? "fade-out before-load " : "before-load "}>
				<Row className="align-items-center"  style={{height:'100vh'}}>
					<Col>
						<Row className="text-center">
							<Col>
								Ο γάμος της χρονιάς έρχεται
							</Col>
						</Row>
						<Row  className="justify-content-center">
							<Spinner style={{width:'3em', height:'3em'}}/>
						</Row>	
					</Col>
				</Row>
			</Container>

			<div className={finished ? "fade-in" : "opacity-0"}>
				<div data-section id="start">
					<Intro />
					<Maintext />
				</div>
				<Container className="my-5">
					<Row className="justify-content-center opacity-50">
						<Col lg={3}>
							<Image src="rings2.jpg" fluid/>	
						</Col>
					</Row>
				</Container>
				
				<div data-section id="section1" className="py-5">
					<Ceremony />
				</div>


				<Container className="my-5">
					<Row className="justify-content-center opacity-50">
						<Col xs={8} lg={3}>
							<Image src="glasses2.jpeg" roundedCircle fluid/>	
						</Col>
					</Row>
				</Container>

				<div data-section id="section2" className="py-5">
					<Party />
				</div>
			</div>

	</>
    );
}


/*
        <div className="whisper-regular"> Θοδορής & Χρυσή Tester</div>
		<div className="great-vibes-regular"> Θοδορής & Χρυσή Tester</div>
		<div className="mynerve-regular"> Θοδορής & Χρυσή Tester</div>
		<div className="zen-old-mincho-regular"> Θοδορής & Χρυσή Tester</div>
		<div className="zen-kurenaido-regular"> Θοδορής & Χρυσή Tester</div>
		<div className="zen-antique-soft-regular"> Θοδορής & Χρυσή Tester</div>
		<div className="zen-antique-regular"> Θοδορής & Χρυσή Tester</div>
		<div className="sacramento-regular"> Θοδορής & Χρυσή Tester</div>
		<div className="parisienne-regular"> Θοδορής & Χρυσή Tester</div>
		<div className="moon-dance-regular"> Θοδορής & Χρυσή Tester</div>
		<div className="mansalva-regular"> Θοδορής & Χρυσή Tester</div>
		<div className="eb-garamond-600"> Θοδορής & Χρυσή Tester</div>
		<div className="dancing-script-700"> Θοδορής & Χρυσή Tester</div>
*/

const Intro = () =>
{

	return(
		<div className="photo">
			<div className="names">
				<span className="eb-garamond-600">Θοδωρής </span>
				<span className="parisienne-regular">&</span>
				<span className="eb-garamond-600"> Χρυσή</span>
			</div>
            <div className="dateText">
                20 &middot; 07 &middot; 2024, 
            
                    19:00 μ.μ.
            </div>
            <SaveTheDate />
            <div className="timer">
                <Timer />
            </div>
        </div>
	);
}


const Maintext = () =>
{

	return(
		<Container>
			<Row className="justify-content-center">
				<Col lg={6}>
					<Row>
						<Col className="main-text">
							Ως 1 ζευγάρι που όλοι ανυπομονείτε να μας αποκαταστήσετε, μας θαυμάζετε στο τικ τοκ και μας αγαπάτε στην καθημερινότητά μας,
							αποφασίσαμε να πάμε επιτέλους τη σχέση μας ένα βήμα παραπέρα και να μοιραζόμαστε με κάθε επισημότητα το ζεστό νερό, το τηλεκοντρόλ αλλά 
							και τα φούτερ (του Θοδωρή), για "πάντα."
						</Col>
					</Row>

					<Row>
						<Col className="main-text">
							Ξεχάστε τις προγραμματισμένες καλοκαιρινές διακοπές σας, γιατί στις 20-07-2024 και ώρα 19:00, θα παρευρίσκεστε στον αξέχαστο και 
							μοναδικό γάμο μας (ώστε να υπάρχουν μάρτυρες και να μην μπορεί, κανένας εκ των δύο, να αρνηθεί στο μέλλον την ύπαρξη της δέσμευσης)!
						</Col>
					</Row>

					<Row>
						<Col className="main-text">
							Με πολλή χαρά κι ανυπομονησία, περιμένουμε να μοιραστούμε μαζί σας μια τόσο ευτυχισμένη στιγμή μας, στο Ιερό Βαπτιστήριο Αγίας Λυδίας της Φιλιππησίας
							στο χωριό Λυδία Δράμας.
						</Col>
					</Row>	
				</Col>
			</Row>
		</Container>
	);
}

const Ceremony = () =>
{

	return(

		<Container className="my-card px-4 py-3 text-center">
			<Row className="pb-3"><h2>Η εκκλησία</h2></Row>
			<Row className="church my-card-photo mb-3" />
			<Row className="mb-2">
				Το Μυστήριο θα τελεστεί στο Ιερό Βαπτιστήριο Αγίας Λυδίας της Φιλιππησίας
			</Row>
			<Row>
				<Col>
					<Button size='sm' className="float-end" href="https://maps.app.goo.gl/QnYKAUJURjBW1PKM7">Χάρτης</Button>
				</Col>
			</Row>

		</Container>
	);
}

const Party = () =>
{
	return(
		<Container className="my-card px-4 py-3 text-center">
			<Row className="pb-3"><h2>Το κέντρο</h2></Row>
			<Row className="tavern my-card-photo mb-3" />
			<Row className="mb-2">
				Θα ακολουθήσει δεξίωση στο Κέντρο ΒΑΗΣ στο Δοξάτο
			</Row>
			<Row>
				<Col>
					<Button size='sm' className="float-end" href="https://maps.app.goo.gl/iRq7ZiL86qzfSvrL9">Χάρτης</Button>
				</Col>
			</Row>

		</Container>
	);
}


const SaveTheDate = () => 
{
    const generateICSContent = () => {
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Example Corp.//CalDAV Client//EN
BEGIN:VEVENT
UID:20191225T120000-123456789@example.com
DTSTAMP:20240311T190000Z
DTSTART:20240720T160000Z
DTEND:20240720T170000Z
SUMMARY:Ο ΓΑΜΟΣ ΤΗΣ ΧΡΟΝΙΑΣ
DESCRIPTION:Σας περιμένουμε στο γάμο μας ( Θοδωρής - Χρυσή ) !
LOCATION: Ιερό Βαπτιστήριο Αγίας Λυδίας της Φιλιππησίας\, Δράμα\, GRC
END:VEVENT
END:VCALENDAR`;

        return icsContent;
    };

	const handleDownloadICS = () => {
		const icsContent = generateICSContent();
		const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', 'event.ics');
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<Row className="justify-content-center pt-5">
				<Button onClick={handleDownloadICS}  style={{width:'auto', fontFamily:'Parisienne', fontSize:'1.3em'}} >Save the Date</Button>
		</Row>
	);
};

