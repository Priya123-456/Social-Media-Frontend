import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChild, faBaby ,faSearch} from '@fortawesome/free-solid-svg-icons';
const AppFlight = () => {
  const [fromCity1, setFromCity1] = useState('');
  const [toCity1, setToCity1] = useState('');
  const [departDate1, setDepartDate1] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState('economy');
  const [result, setResult] = useState(null);
  const [conversionRate, setConversionRate] = useState(90); // Example conversion rate from EUR to INR

  useEffect(() => {
    // Optionally, you can fetch the conversion rate from an API
    // Example:
    // axios.get('https://api.exchangerate-api.com/v4/latest/EUR')
    //   .then(response => {
    //     setConversionRate(response.data.rates.INR);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching conversion rate:', error);
    //   });
  }, []);

  const handleSubmit = async (e) => {
    console.log('Submitting form data...', fromCity1, toCity1, departDate1, adults, children, infants, travelClass);
    e.preventDefault();
    const url = 'http://localhost:8000/api/search-multi-city';
    const requestData = {
      fromCity1,
      toCity1,
      departDate1,
      adults,
      children,
      infants,
      travelClass,
    };
    try {
      const response = await axios.post(url, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response from server:', response.data);
      // Handle successful response here
      setResult(response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error response from server
      // Example: Display error message to user
    }
  };

  const calculateTotalExpenseINR = (price) => {
    let classMultiplier = 1;
    if (travelClass === 'business') {
      classMultiplier = 1.5; // Assuming business class is 1.5 times the price of economy
    } else if (travelClass === 'first') {
      classMultiplier = 2; // Assuming first class is 2 times the price of economy
    }
    const adultExpense = adults * price * classMultiplier * conversionRate;
    const childExpense = children * price * 0.75 * classMultiplier * conversionRate; // Assuming children pay 75% of adult price
    const infantExpense = infants * price * 0.50 * classMultiplier * conversionRate; // Assuming infants pay 50% of adult price
    return adultExpense + childExpense + infantExpense;
  };

  const formatDuration = (duration) => {
    const regex = /P(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?/;
    const matches = duration.match(regex);
    const days = matches[1] ? parseInt(matches[1], 10) : 0;
    const hours = matches[2] ? parseInt(matches[2], 10) : 0;
    const minutes = matches[3] ? parseInt(matches[3], 10) : 0;
    const totalHours = days * 24 + hours;
    return `${totalHours} hours ${minutes} minutes`;
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleString('en-IN', {
      dateStyle: 'short',
      timeStyle: 'short',
    });
  };

  const box={
    width: '100%',
    position: 'relative',
    backgroundColor: '#3572ef',
    height: ' 155.134vh',
    overflow: 'hidden',
    textAlign:' left',
   
    color:' #fff',
    fontFamily: 'Inter',

}
const afterElementStyle = {
   
  position:'absolute',
 fontSize:'46px',
  color:'#ffffff',
  fontFamily:'Aleo',
  left:'550px',
  top:'35px',
  zIndex:'6',
  fontWeight:'300',
 
  borderRadius:'1px'
  
};

const from={
  position:'absolute',
  left:'438.5px',
  top:'140px',
  width:'35%',
  height:'40px',
  border:"none",
  borderRadius:'8px',
  fontSize:'22px',
}

const To={

  position:'absolute',
  left:'438.5px',
  top:'190px',
  width:'35%',
  height:'40px',
  border:"none",
  borderRadius:'8px',
  fontSize:'22px',

}

const Date={
  position:'absolute',
  left:'438.5px',
  top:'240px',
  width:'35%',
  height:'40px',
  border:"none",
  borderRadius:'8px'

}

const iconStyle = {
  marginRight: '8px',
  position:'absolute',
  left:'425.5px',
  top:'288px',
  width:'2%',
  height:'1.5%',
  zIndex:'3',
 
  
};

const iconStyles = {
  marginRight: '8px',
  position:'absolute',
  left:'415.5px',
  top:'318px',
  width:'3%',
  height:'2%'
 
};

const IconStyle = {
  marginRight: '8px',
  position:'absolute',
  left:'538.5px',
  top:'318px',
  width:'3%',
  height:'1.8%'
 
};

const adult={
  position:'absolute',
  left:'454.5px',
  top:'288px',
 border:'none',
 borderRadius:'5px',
 width:'208px',
 background:'none',
 borderBottom:'2px solid white',
 color:'#ffffff',
 
 
  zIndex:'2'
 

}

const child={
  position:'absolute',
  left:'450.5px',
  top:'318px',
 border:'none',
 borderRadius:'5px',
 width:'90px',
 background:'none',
 borderBottom:'2px solid white',
 color:'#ffffff',
 
  zIndex:'2'
}

const baby={
  position:'absolute',
  left:'570.5px',
  top:'318px',
 border:'none',
 borderRadius:'5px',
 width:'90px',
 background:'none',
 borderBottom:'2px solid white',
 color:'#ffffff',
 
  zIndex:'2'
}

const economy={
  position:'absolute',
  left:'675px',
  top:'288px',
  width:'17.5%',
  height:'40px',
  border:"none",
  borderRadius:'8px',
 
}

const Flight={

  position:'absolute',
  left:'918px',
  top:'348px',
  width:'50px',
  height:'50px',
  border:"none",
  borderRadius:'50%',
  backgroundColor:'#04318E',
  zIndex:'6',
  filter:' drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))',
}

const search={
  color:'#ffffff',
  width:'50%',
  height:'70%',
  position:'relative'
}
  return (
    <div style={box} className='box'>
      <h2 style={afterElementStyle}>Search Flights</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>From City 1: </label>
          <input style={from}type="text" value={fromCity1} onChange={(e) => setFromCity1(e.target.value)} required  placeholder='From City 1'/>
        </div>
        <div>
          <label>To City 1: </label>
          <input style={To} type="text" value={toCity1} onChange={(e) => setToCity1(e.target.value)} required placeholder='To City 1' />
        </div>
        <div>
          <label>Depart Date 1: </label>
          <input style={Date} type="date" value={departDate1} onChange={(e) => setDepartDate1(e.target.value)} required />
        </div>
        <div>
        <FontAwesomeIcon icon={faUser} style={iconStyle} />
          <label>Adults: </label>
          <input style={adult} type="number" value={adults} onChange={(e) => setAdults(e.target.value)} min="1" required />
        </div>
        <div>
        <FontAwesomeIcon icon={faChild} style={iconStyles} />
          <label>Children: </label>
          <input style={child} type="number" value={children} onChange={(e) => setChildren(e.target.value)} min="0" required />
        </div>
        <div>
        <FontAwesomeIcon icon={faBaby} style={IconStyle} />
          <label>Infants: </label>
          <input style={baby} type="number" value={infants} onChange={(e) => setInfants(e.target.value)} min="0" required />
        </div>
        <div>
          <label>Class: </label>
          <select style={economy} value={travelClass} onChange={(e) => setTravelClass(e.target.value)} required>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
        </div>
        <button style={Flight}  type="submit"><FontAwesomeIcon icon={faSearch} style={search} /></button>
      </form>

      {result && (
        <div>
          <h3>Flight Results</h3>
          {result.flights.data.map((flight, index) => {
            const totalExpenseINR = calculateTotalExpenseINR(flight.price.grandTotal);
            const priceINR = (flight.price.grandTotal * conversionRate).toFixed(2);
            const departureTime = formatDateTime(flight.itineraries[0].segments[0].departure.at);
            const arrivalTime = formatDateTime(flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.at);
            return (
              <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                <p>Flight ID: {flight.id}</p>
                <p>Departure Time: {departureTime}</p>
                <p>Arrival Time: {arrivalTime}</p>
                <p>Duration: {formatDuration(flight.itineraries[0].duration)}</p>
                <p>Price: {priceINR} INR</p>
                <p>Total Expense: {totalExpenseINR.toFixed(2)} INR</p>
                {/* Add more flight details as needed */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AppFlight;
