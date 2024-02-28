import React, { useState } from "react";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import ResponsiveDatePickers from "../../components/schedule";
import Button from "@mui/material/Button/Button";
import { Link } from "react-router-dom";
import { FormControl, IconButton, InputLabel, Select, styled, Modal, Typography } from "@mui/material";
import { DivActions, HeaderDash } from "./style";
import { CalendarIcon } from "@mui/x-date-pickers/icons";
import MenuItem from "@mui/material/MenuItem";



export const DashboardPage = () => {
    const [service, setService] = useState('');
    const [professional, setProfessional] = useState('');
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [time, setTime] = useState('');
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleServiceChange = (event) => {
      setService(event.target.value);
    };
    const getAvailableTimesMock = (professional): string[] => {
        const availableTimes = professional === "Maikol Douglas"
            ? ["08:00", "10:00", "14:00"]
            : professional === "Felipe Boladão"
            ? ["09:00", "11:00", "15:00"]
            : professional === "Marcelo D2"
            ? ["08:30", "12:00", "16:00"]
            : professional === "Mano Bronw"
            ? ["09:30", "13:00", "17:00"]
            : [];

        return availableTimes;
    };
    const handleProfessionalChange = (event) => {
        setProfessional(event.target.value);
        setTime('');
        const mockAvailableTimes: string[] = getAvailableTimesMock(event.target.value);
        setAvailableTimes(mockAvailableTimes);
      };
    const handleTimeChange = (event) => {
        setTime(event.target.value);
      };
    const StyledLink = styled(Link)`
    text-decoration: none;
`;
    const StyledButton = styled(Button)`
    background-color: #0d5bcf;
    color: white;
  
    &:hover {
      background-color: #69d113;
    }
  `;
   

    const handleScheduleClick = () => {
        setIsDatePickerOpen(true);
    };

    const handleDatePickerClose = () => {
        setIsDatePickerOpen(false);
    };

    const handleConfirmClick = () => {
        setIsModalOpen(true);
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
      };
    return (
        <>
          
                <StyledLink to="/">
                    <StyledButton variant="contained">
                        Sair
                    </StyledButton>
                </StyledLink>
     

            <DivActions>
            <IconButton onClick={handleScheduleClick} color="primary">
                <CalendarIcon />
            </IconButton>
            {isDatePickerOpen && (
                <ResponsiveDatePickers onClose={handleDatePickerClose} />
            )}


<FormControl fullWidth>
        <InputLabel id="service-label">Escolha um serviço</InputLabel>
        <Select
          labelId="service-label"
          id="service-select"
          value={service}
          label="Escolha um serviço"
          onChange={handleServiceChange}
        >
          <MenuItem value="">Escolha um serviço</MenuItem>
          <MenuItem value="haircut">Cortar Cabelo</MenuItem>
          <MenuItem value="beardcut">Cortar Barba</MenuItem>
          <MenuItem value="hairandbeard">Cabelo e Barba</MenuItem>
          <MenuItem value="eyebrows">Sobrancelha</MenuItem>
          <MenuItem value="platinum">Platinado</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="professional-label">Escolha um profissional</InputLabel>
        <Select
          labelId="professional-label"
          id="professional-select"
          value={professional}
          label="Escolha um profissional"
          onChange={handleProfessionalChange}
        >
          <MenuItem value="">Escolha um profissional</MenuItem>
          <MenuItem value="Maikol Douglas">Maikol Douglas</MenuItem>
          <MenuItem value="Felipe Boladão">Felipe Boladão</MenuItem>
          <MenuItem value="Marcelo D2">Marcelo D2</MenuItem>
          <MenuItem value="Mano Bronw">Mano Bronw</MenuItem>
        </Select>



        <FormControl fullWidth>
                    <InputLabel id="time-label">Escolha um horário</InputLabel>
                    <Select
                        labelId="time-label"
                        id="time-select"
                        value={time}
                        label="Escolha um horário"
                        onChange={handleTimeChange}
                    >
                        
                        {availableTimes.map((timeOption) => (
                            <MenuItem key={timeOption} value={timeOption}>
                                {timeOption}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


                {time && (
                    <button onClick={handleConfirmClick}>Confirmar</button>
                )}
      </FormControl>
            </DivActions>

            <Modal open={isModalOpen} onClose={handleModalClose}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
          }}
        >
          <Typography variant="h6">Agendamento Confirmado!</Typography>
          <Typography>
            24/02/2024 as 14:00!
            Te enviaremos um email! Obrigado pela preferencia!
          </Typography>
          <Button onClick={handleModalClose} variant="contained">
            Fechar
          </Button>
        </div>
      </Modal>
            <FooterComponent></FooterComponent>
        </>
    );
}