import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getparticularFurniture } from "../../Actions/furnitureActions";
import { ClimbingBoxLoader } from "react-spinners";
import Navbar from "../Navbar/Navbar";
import "./FurnitureDetails.css";
import furnitureimg from "../../images/furniture-img.jpeg";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { AiFillUsb } from "react-icons/ai";
import { MdSensors } from "react-icons/md";
import moment from "moment";
import { DatePicker, ConfigProvider, Modal, Button } from "antd";
import { useState } from "react";
import { newBooking } from "../../Actions/bookingActions";
import StripeCheckout from "react-stripe-checkout";
import Footer from "../Footer/Footer";
import { Margin } from "@mui/icons-material";
const { RangePicker } = DatePicker;
const FurnitureDetails = () => {
  const params = useParams();
  // console.log(params);
  const dispatch = useDispatch();
  const { furniture, loading } = useSelector((state) => state.furnitures);
  // const { error,loadingb } = useSelector((state) => state.booking);
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [totalHours, settotalHours] = useState();
  const [availibility, setavailibility] = useState();

  //
  const [size, setSize] = useState("large");
  const [load, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  //
  useEffect(() => {
    dispatch(getparticularFurniture(params.id));
  }, [dispatch, params.id]);

  const selectedtimeSlots = (values) => {
    // console.log(moment(values[0].$d).format("MMM DD YYYY HH:mm"));
    // console.log(moment(values[0]).format("MMM DD YYYY HH:mm"));
    setfrom(moment(values[0].$d).format("MMM DD YYYY HH:mm"));
    setto(moment(values[1].$d).format("MMM DD YYYY HH:mm"));
    settotalHours(values[1].diff(values[0], "hours"));
    setavailibility(true);

    const sFrom = moment(values[0].$d);
    const sTo = moment(values[1].$d);
    if (furniture.bookedSlot.length === 0) {
      setavailibility(true);
    } else {
      for (const bookedSlot of furniture.bookedSlot) {
        if (
          sFrom.isBetween(bookedSlot.from, bookedSlot.to) ||
          sTo.isBetween(bookedSlot.from, bookedSlot.to) ||
          moment(bookedSlot.from).isBetween(sFrom, sTo) ||
          moment(bookedSlot.to).isBetween(sFrom, sTo)
        ) {
          setavailibility(false);
        }
      }
    }
  };
  const rent = furniture && furniture.rent;
  const bookedSlot = {
    from: from,
    to: to,
  };
  // const handleAvailibility = () => {
  //   if (!availibility) {
  //     alert("Not Available");
  //   } else {
  //     alert("Available");
  //   }
  // };
  // const handleBooking = () => {
  //   dispatch(newBooking(params.id, bookedSlot, totalHours, totalHours * rent));
  //   setfrom("");
  //   setto("");
  //   settotalHours("");
  //   setavailibility(true);
  // };
  const onToken = (token) => {
    // console.log(token);
    dispatch(
      newBooking(params.id, bookedSlot, totalHours, totalHours * rent, token)
    );
    setfrom("");
    setto("");
    settotalHours("");
    setavailibility(true);
  };
  return (
    <>
      {loading ? (
        <div style={{ height: "100vh", backgroundColor: "black" }}>
        {" "}
        <ClimbingBoxLoader
          color="#36d7b7"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
      ) : (
        <div>
          <div style={{ backgroundColor: "#222831" }}>
            <Navbar />
          </div>
          <div
            className="furniture-details"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div style={{ padding: "2vmax" }}>
              <img src={furniture && furniture.url} alt="" srcset="" className="furniture-img" />
            </div>
            <div
              style={{
                padding: "2vmax",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <h1 className="furniture-title" style={{ fontSize: "2.1vmax" }}>
                {furniture && furniture.title}
              </h1>
              <p className="furniture-dis" style={{ fontSize: "1.2vmax" }}>
                {furniture && furniture.description}
              </p>
              <div
                className="furniture-icon"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "90%",
                  gap: "1.1vmax",
                }}
              >
                <div style={{ fontSize: "1.2vmax" }}>
                  <MdAirlineSeatReclineExtra color="#222831" size="1.3em" />
                  {furniture && furniture.features.colour}
                </div>
              </div>
              <h3 className="furniture-rent" style={{ fontSize: "1.5vmax"}}>
                ₹{rent}/hr
              </h3>
            </div>
          </div>

          <div className="furniture-date">
            <div className="furniture-date-text">Select your duration</div>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#222831",
                },
              }}
            >
              <RangePicker
                className="furniture-range-picker"
                showTime
                format="DD/MM/YYYY HH:mm"
                onChange={selectedtimeSlots}
              />
            </ConfigProvider>
            
            <button onClick={showModal} className="furniture-book-btn">
              BOOK NOW
            </button>
            <br />
            {from && to && (
              <>
                {/* <button onClick={handleAvailibility}>
                  Check for Availibility
                </button> */}
                {availibility && availibility ? (
                  <Modal
                    className="furniture-modal"
                    style={{}}
                    open={open}
                    title="RentIt"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={400}
                    bodyStyle={{
                      padding: "20px",
                      textAlign: "center",
                      fontStyle: "oblique",
                      fontFamily: "fantasy",
                    }}
                    centered
                    maskStyle={{
                      background: "rgba(0,0,0,0.56)",
                      backdropFilter: " blur(8px)",
                    }}
                    footer={[
                      <Button key="back" onClick={handleCancel} size={size}>
                        Return
                      </Button>,
                      <Button size={size} className="book-now-furniture">
                        {/* <Link
                            
                            onClick={handleBooking}
                          >
                            DONE
                          </Link> */}

                        <StripeCheckout
                          token={onToken}
                          currency="inr"
                          amount={totalHours * rent * 100}
                          stripeKey="pk_test_51MD4fISAnNDrfpjkKm2ORcKYxxnwzKF0wW8rWukzWaGzLOAXGTlnF7ktZH8Cwz31X4el9BrYvmbZJAOWaSM1JJOP00wgOCnCqT"
                        >
                          <Link>CONFIRM</Link>
                        </StripeCheckout>
                      </Button>,
                    ]}
                  >
                    <div className="furniture-book-details">
                      <h4 style={{ fontWeight: "600" }}>
                        Total Hours: {totalHours}
                      </h4>
                      <h4 style={{ fontWeight: "600" }}>
                        Total Amount: {totalHours * rent} Rs
                      </h4>
                      {/* <Link className="furniture-book-btn" onClick={handleBooking}>
                        Book Now
                      </Link> */}
                    </div>
                  </Modal>
                ) : (
                  <>
                    {/* <h4>Not Available</h4> */}
                    <Modal
                    className="furniture-modal"
                    style={{}}
                    open={open}
                    title="RentIt"
                    onCancel={handleCancel}
                    width={400}
                    bodyStyle={{
                      padding: "20px",
                      textAlign: "center",
                      fontStyle: "oblique",
                      fontFamily: "fantasy",
                    }}
                    centered
                    maskStyle={{
                      background: "rgba(0,0,0,0.56)",
                      backdropFilter: " blur(8px)",
                    }}
                    footer={[
                      <Button key="back" onClick={handleCancel} size={size}>
                        Return
                      </Button>
                    ]}
                  >
                    <div className="furniture-book-details">
                      <h4>Not available</h4>
                    </div>
                  </Modal>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FurnitureDetails;