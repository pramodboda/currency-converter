import React, { useEffect, useState } from "react";

import Axios from "axios";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";

function CurrencyConverter() {
  // Initializing all the state variables
  const [from, setFrom] = React.useState("usd");
  const [to, setTo] = React.useState("inr");
  const [info, setInfo] = React.useState([]);
  const [input, setInput] = React.useState(0);
  const [options, setOptions] = React.useState([]);
  const [output, setOutput] = React.useState(0);

  // Calling the API whenever the dependancy changes
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  const fromSelectChange = (event) => {
    setFrom(event.target.value);
  };

  const toSelectChange = (event) => {
    setTo(event.target.value);
  };

  return (
    <React.Fragment>
      <Card variant="outlined" sx={{ width: "20rem" }}>
        <CardContent>
          <Box sx={{ mb: 2 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box sx={{ minWidth: 120 }}>
                <Typography variant="body2" color="text.secondary">
                  From
                </Typography>
                <FormControl fullWidth size="small" variant="filled">
                  <Select
                    value={from}
                    onChange={fromSelectChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    placeholder="From"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ pt: 2 }}>
                <IconButton
                  aria-label="Swap"
                  onClick={() => {
                    flip();
                  }}
                >
                  <SwapHorizontalCircleIcon fontSize="large" />
                </IconButton>
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <Typography variant="body2" color="text.secondary">
                  To
                </Typography>
                <FormControl fullWidth size="small" variant="filled">
                  <Select
                    value={to}
                    onChange={toSelectChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Amount
            </Typography>
            <TextField
              inputProps={{ "aria-label": "Without label" }}
              id="amount"
              variant="filled"
              size="small"
              onChange={(e) => setInput(e.target.value)}
            />
          </Box>

          <Box>
            <Typography variant="body2" sx={{fontWeight:"bold"}}>Converted Amount:</Typography>
            <Typography variant="h5">{input + " " + from.toUpperCase() + " = " + output.toFixed(2) + " " + to.toUpperCase()}</Typography>
          </Box>
        </CardContent>
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={() => {
            convert();
          }}
        >
          Convert
        </Button>
      </Card>
    </React.Fragment>
  );
}

export default CurrencyConverter;
