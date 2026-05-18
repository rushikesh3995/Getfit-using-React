
import "./Home.css";
import { useState } from "react";
import Onedaytry from "./Onedaytry";
import PricingTable from "./PricingTable";
import FAQ from "./FAQ";
// import gym1 from "../assets/gym1.mp4";
import gym1 from "../src/gym1.mp4";
import { FaSearch, FaDumbbell, FaRocket } from "react-icons/fa";

function Getfit() {
  const [showPanel, setShowPanel] = useState(false);
  const [selectedArea, setSelectedArea] = useState("Default");
  // const [selectedArea, setSelectedArea] = useState("All");

 const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [tip, setTip] = useState("");


const gyms = [
  {
    title: "GETFIT Gym Wakad",
    area: "Wakad",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
    address: "Wakad, Pune",
  },
  {
    title: "GETFIT Gym Hadapsar",
    area: "Hadapsar",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    address: "Hadapsar, Pune",
  },
  {
    title: "GETFIT Gym Viman Nagar",
    area: "Viman Nagar",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
    address: "Viman Nagar, Pune",
  },
  {
    title: "GETFIT Gym Koregaon Park",
    area: "Koregaon Park",
    img: "data:image/webp;base64,UklGRoI/AABXRUJQVlA4IHY/AAAwywCdASogAeoAPp0+mEkloyIhL3ZMuLATiWUAzMkwmqN77f+UQ5Peb+pny/2PmSEuWX7XwZ/Pfsn9p+Znxm/ruKP47/K8yPtN/S/x3tq/sf/D4Y/sn8t/3f8N7B3tTz7fxP/H3Km3f7z0DvbD6//zP8j7Cv5nmj/H/7r2Af17/6Hsn/3PDY/F/8X9w/gK/n3+C/7/+V94n/R/+3/A9G31p+2XwK/sj6bn////Hww/dv//+7H+1P/2J94SDQtd04E9VZIJz8/Cto6dvugwf8/1lU65XxMvc17NJwq6YnJ8pN0b46Pkrc0HecG+2kFqr2l/jQqcuvPqJ8Z+kgHA/FtGfhl/jGAGFXEZ7zw/izeMLEQGXmF/Zo9To/bfxN21a7Rxo+opSEifcgbG8YIGW/vE+M2//QU66LcaVUDixBEMwTqJoIRHjYVSNtUcMOEQcB+UrpyFxOlXiZpQprjOeum/3bZVzKuQ9OO/ekLu+HVmgZNu2P6aUJ/jyAG8+7YES8Ej1J+a1tE7Rk5OJ4CE55BdQaHKRy/9/imZpHp+Uf3Gav2BSs2cAKe28fQVwugM608aDb3Su35W+1Q+jJ0Pe2vYh0wN0a8GFY4M+KChZptV5eJM2xDoOFO9mhQScUVzso0VpzJG+vRg98SEq9+puklgszr9Y/WnMXqiuV5v1ret3DDf56RGDRdluWtBrvzHtap0Dgg6u5rLhGBf6vSmr2m5KFH1PjxsZFAhFJgfXHWKxU1TOhgGhRop9nsxQohm2T7JTZAtn0Gk6wdIQH8hjs9khxyTqAOCjFAsIkbhWT8G0pJHa4Skui81wcKTAoy0qOIlc/0x1/TQD5lfB7nR37ePNevDDQOk9bLnCaZvqX4oLx7fEdNjh6RZAB5Wu4Yp6I/rtEewdw8PA8TT1FIDBem8bBZGuVisOGIRv3pKHt9wkqoZSzkM5aweerxj64wi8G04yRrKTL5CYB6c4AnkB/NnIwZMz4Y0rZyJMNTJx7b2kT8QucV7d9CSXvbbJ/2pbcHYiQxposHfnwaPnZ5HuRriw2YYT4+xOrcBHfTIQlye6UtVLXqKoWSUEgX1Ra8LXi3FZB+w1delCNrhjC264PN57eon2M8SY5TjdC/mOesYHbzHPu3ep22/H9HHqiIBuMa5ScYero7/IPqEQnYB4EbUX1/GWny6JvNkwpTIBQ+SXCu1pr7i3XhP7zVdHBOw2y0N35TkWkE68Euu4N7xgMSGiAidGFvxb65200Z3zToq3Wgezku+Se7hpPzrQj2YdPG2Izy1EnIyI79yfS5a7RBjer+jcNH2i/R4NlVJ0vGbTtOVms0H2JAcAwzyxtpRRkWsH1NPeBehAwu8xwXZtltOF4TIqDI8hKqn3WaSGzqLns+vJuwpP9tQRp9jJMWaRJPtZq4rccc/Pc2p29Wci8Srgt6LRyG5kHTgIFtmaln/rLQ2GSjhOlw3zwiMMG/7xL7F89oMXNtb+yubgYcssf6wZ58Gj02/Kjoq55eiOX/P10kZ/qLwfPQgDmDfVRN171TFGxvfzk6ghghYuifUn+yKkBAk9aoWQG+NDhp1QMOWWxJIs58lmLXWFXucF0fPoRH8IxD0zuQ8mezuQ3EYPmNWHu1Sl+FFAE9c9rqVNkqbNsJ3wnR0Ot1/2XkCeKR2Z63VsMLvwnKVPPPxXuLMs1qzhAzBWqWA8N13HeThjy5CqrWfARkYzLj9/OESRNZ1XUhVhfktlSahCZxsUl3vI2xgsdKH70SgN35ppEqdVzPk+/P8T27ENbQCXhmyQ8zoLg18+TyqMDBKXJEbqvrd5Z/Gtn6eN/oLvgTUTunmBZrArgnVzdCzGfpRsSgua/ZXGAaA1J4OdpRGGRbP9GsJU6MJv+ZT+VvZNK7YYsDHze+dwbX1bFLqed7j7Nv1wkogN6SvuwCBzydiPleGxDYDAjh+lafZEqvKf1Coalp7xMVinh6gNft28wbQaZ2v5Q3W/P8tC31V2W2KxkATyRTCUl0+lLwo93oUIy5SeMTjGw4jQan//2xLOTV/4W4F7F+vieijBP0U9YbpGxJAH/+z5il7Wp6f/80h7oReuTYjNcAY3GVNnQuxJLpm5eNYaOBMGq71LrD88TkiKcQY1/ZALpe8wruexVY3ihJbQpEej6jbATHRX2dn7rG/kZzn8T8C8StwAAD+9TfnqHateRK1CTXFevq3riWzUTtD98hEOuMdYiS0eIAGEI17jN/zRh/CEkh4lH4jdEXc5CBxtfDd4BAZn3ALA6C5pylbEqw6cqM5SHp0mrSV7U8PWfyySeMCpZ1ukPmhOlened/21Jr7gYVH1HRhA6ZCZZjxHabM6+NrfDfer63QBY3sMhOuG0jRQc5QfSNpo6SjpeMViQzQgM2MMyXzGDDCu6/ti4VX9VzRFweW7dAY+8j7D6LLjJO36QrsPnrZRV44IydsjVEpTaLUoUoliYGDoFuNOScL0LRcZ+OXVvdgiHlOkcC+iykdkr9oQbDi52FUV+p2Isxwv3fYchLqELtvxUwmp8iP4IryEiB+/7IlNwRQu8oDOPELF58uHS0o4X8MlUI4Nqtxdd2946PVFyB0aqyXe83SLfzF/kZ4G9H8MeUqCOLB+z5u+hFk+CLuHL4E65HunSAqsH5a08oiTFJIXYaypOEYGmFoMJfTHpqONnalILjqNZg90l7gFG1QxvUUqr4JjQ4h2ye2Y2L40bKsUk3A6A/y5poeji9wfCr+3zvUwBryy0zfN8uYaBtKRXIMqLvt0eHvQVJzsWkFb5tsD2GvbtDONZ/h+z5+aNXLrAwvCfD6fvxcNTc4KAxvcbCT+U3DthXw65bR3lWMRCAe7RLl8yCqXQQEDr6cDBifJc4LIXtF6s5ci4DGy0kBsY64Hw15GJxOTZQi9k/fBR0mmgZEd6PeC3fXqTBu+eK3MaF+lNzhWSKryIacf5q+HVPT7T9O+p0fXPIl9Ah3dsPFJXfsyIigWTFZw+MGSZH9GWAco44UpXXcqgDhaOUZLjF+LRg67gT7rd0ldTwIs1inNVFRa6cchBYl/5IJFqM1ocrhpuClkPf4EQ72JyrknpfpEY1aiwAgdNkP8w6LMSfJkTY2h1Fh3tz9tp7bNUnCVdF8jFowUnrGql5EMMn8zsWGn1D0mLb1+dR/u8UBTI0Rw0uJw18wJjwA7pXGZ5X9LmBDKNDaigTrABG9bO/9KhiVUzaQmJ51u9J+fMF9tANBIG+4L4OhWBVp+TlLUuGlnep67z3tcKZXcDZql7mp7A6IgWF31rvF8Le7A4NygNRfT2aVUV5VWokM04gUWAVD1U5zRvHZYDOi/YCmz8Dr8gENKdsKcgVxSRAXOc44yRgl4PhpLuvQydvYri6owvf500WY8FVSaFtkD4MwmRdwYA0D1FhZgYnldvllgCIZPqtVD0YTgaqVN4621kSMyZZxxJ7wTuAROFWQ0RVL36Rmh6UQ8RjlArsqaBkN/Jas+QDxBiDq4nsJO+fxjWkdOr9oitTNLDCZH7X/rvTunvmEnWVYXL6PgNdnRneOhqqWn0P2AC1SXFC3Asg+59oO4JN0DZ0jyrQEUSejld8uuaynMFG2tPxX7hMCYtQToYVW96uc4SvBFczfToqqtqdukWQFc+jJOZ454OxeI6XMtR1x2wLGjSOAZ1gM5aosT4XGZBJfDDfGrbzC9X6/kb+/GEB0XteOJneEXzc+FkwpMjnMV7T9ejBhjZo2q3j9an3OVmuiOS1Sq4svmGZYe+7W8LAot23ldcAGY/WGzm3KLSqu2dQlXDmzp9DfzyEKakE+zd20ARnU5mBddyWnrx1ug/101w/ys7yK9Hu5N0vJkCoBsraYxOE7tfKh+gzkSDpWXECEhvS8T51Qj8Hx4Ol85fxSbm04RVlSF7PILO4xyTVDbOPyl11oYcvbSyVnWizpBW2CZIJ7lhhR5vkGu0xws/UUrto9pOtROQfRblchgRmZiSq2r8RFLTYf2aqt9vOj0vXtJNQyRIIDIUn+PTfW0guLlQNxsMPMqOk4GOxyIkcv+RPEuOwPQb52YMsH6qaAhoZe1acEUbD8s2DrMcbdA64CTLQDx+FhgSElmTVxnScOrD2zyAj7KnkdBtYs32XXdkzUk1AHGpmtfGJG2yPJmeZUH6cMpJ8i9m8xwL34aj18QSBrRvtqMr+ySD980P1IJUXhWqDmzvdVIhIR/H20U3aA8vvPZBR0/hWcmu4k0jHLg0pPyMGfy1XbICNTYPEcXsN9KuXROTDO6HrKBtyx3ZrhC7yX6rSkEVwxsEWhKCDhypOgjJJxiOghJWTxDvF33pSK9FLLMu79ulPMAS5n1mEM1OmfnfatwjHT4ghp/kgnon/i1RG3CeIENVxd+sQOuy3Ld0ZCmG8lpGcVmBbBgs5IAvSrj0pqzyu0faJSC5S+dYqLsv9bUFawaC/gCU5PDHRUsdYrBKlqpG3jIN/mgk5+bftxhMiJJLXhauVGVDH0DW7bJSrbSecFlM8kaHs3jX/ICwOGD2MxXUBlp1Klj3C1QePalGVAHcjgbLdNqO7NVsan8DZEKq/BOpsW+7zr9kS8PZQqK+8/ZYRnec6Y0PGqbIP1xeD3sJxLYLcqj2FsadQZOcyRN3VuZKca/841P3Nze7PH8KUXfICfmA3tmj15VWtsfU9NZSLwscpTdbbac8dY75B3gBJqNkl84fwM7FcfPhrFJMcgRR5Ep7n9sRl1/Fgu3rvo3YlKp66F7rZL33kXQgvC4GnXuYlrzOhiAH3RSOhZNZOP+PLcB7qw7L2iZcxzK3Sdq7fr1pIlTe9TYoiUao0Sa8Sggd+JvZe7NOxjQeRm8bU4aup1MOSeugZH5OKgoYRJkvzQTWtT7Y+jHaLJUIBNW+XoUwq6qedmv6NlAfbP6nrip/jYP6OBPSAl8+anuJ57IfAVj2je5PhPio/dlz8A2LiOoNrhnhX+qqGeK/LRTU3jo3Jcp0Ok/hGagzg/5aARgeHiX7mm6fifrUNWiJjz9w9Jq0TMB7luY6pX19jwKNg2Y1AolBgSITjFz9cs+nYtD8RL8tfCPS4nscm8nEMDfgtP65KRsRbPRHTLI6YA8KhGvdEfls24JeuSH/djfu+j6vBwDz6npZje0eFEmaBtPWy4pfFSSHGuBY8ZB3viPgjMqaY3U3lD9UnFUHRccHjmpMaLjBkJBIdsDXfaba2n9rx0bDcWZjS74ZtZG8kByzoOkKbkL0nRrY8HzgLtSopJYBTcA+hwVELFHsnde92aA/LxkbGZZuoM0Qz2HUSlTq0MIKUv5dT/PHfaWWtU3m2d5E0BikuFCM1Mz1o7D3tZ+xJWB8g2r6FmFw+C3H/IfZpXB4g1FOqOkLGnSdiFRR/tRhaJH4yn02T4hdyFie+A+Xz//7rEb2XJT4bRjtVqmsW+PtN1yWUM1FJUnAcDsphGd1fyLpJB1Zsf8PRXgVgurq89TltsrrI+GWcYfI0fU4eTFiX1NSm8N3vsQzTnV8wnar/bGcsfhcypcTknoYwIqawU7zGw3eewYma2Q9K2SEqQRwwwzZ30pwW69V7TsCO1fWkA60gwO1E4h8GRlozm+PV7Jv+yrItHry7gkZcYZumM2SN83sbbw62YXaEbPYjei9LPwDnon8yTIX46EfAe+jFLzj5rs2Gg+C1Q7eEI3Y4HQzbQYZj8+mW8fGaOiBXLIFV9j94fLHgf53MqCZmIbEvdgRIQC5r3quBBxrDwqX24HJUf4V+JBQGMw6/y/7bujBVEqKetVdwtE2PAVxCqG3dv3CCVUxTYlBtpKl6+mjEDYvEPVi9We8x45H+8mTclLOwjADSExYiD7YlegNDg6JyOnAXJ4ooBcYkXGBw3b10nrhqWkUmALicpMSMPqyK2Rqs8VyqEcSCyj+LHVvqtijKt3LSz/lLDGRcfBhQEM2OaxGRtapER9FxnZfq9mWKgIiRn2tUMrRUqgjQfF/0GGcI0sdKuhhFlOz6wbkl1dNleT5mB5QTJjJokh2yCUnOikkoXVv9OTXu44a4y3PGXyI84vwiIz3Cke7hR/6eaJCNLLNxd3ZKJru6zVCiknUs2+1jjMon0+0huYBilVuBZJp1r2npf2p9dvMHDgRUATFcue9BIMKu5eEtaKZNkS61FN71JUZnD+QBYzZKK3AXmbzvIuycAO7MJtRVVWM7hFriMT7wKroelEZJ3PDQW167TXP+urYHvikfEcjILahjNR7he59oZ5e2gRkLC9IdzA5fsL/UUoUNRZQokuDBccsVcXKkBlfmLcpNOBYnGcsHoR+nUXWsM5n2tiqoFsytlGYwPPR/15jLHvuzVDI1mSzs5E6B3QZNvfIGCRuUKyrtNhNHzmLaiYn4ILuQs7fLpc1mROYAZuvpoWsYO8RjOHh9A9utWmVS429tYogZupPacaTXT+0mxgvK4sYHcJ68OBNsfP/2sKGFkNNQ6Uncj8rbfaCYqHzSTO4zd1cYVfXvBblVxigDpLRDEiy3prPXJapULqNHzyxtpEwXjnWKPROkOREx4K7S3Cl8A53T4NKbeKgwx6VoZjJNgwvO32asGl60Vp10oami1xFuoqcVBrNXXJrH2mw7U8Bp5LtSskq+2d1ZXAzRYeDLUHuwvTO0Eey++evEVUI1iXKwk0IWvt7nJDfXUv0Zv/J6WnBcR/D9ei61PUzVL6QCRIozrQR1jaMFOlllb5T5XRdKX8yCWd8AseCt4obGrBzl1yIIFfwsajwLOXeunqiGAtL9xd5a8hAFiaH+JSSn3YFhRlXWGB6rin8Iwnr5vRXKYsgSXAvYys+O6oKoCQ6RxKkwmpWWGGeV/MvpAP7IwVsDN7SMSJ7wj3paz2wXMjtAtDFEawsCd/zMzJ4/bJSCG+f0wY2OiwajhE/i+hIxFgsUDjvJOPZzx46ZNAI97EKxUVRcmGVi0+PicrhnW0jpNOQb1EesM/h3fZVbfBJ5qEjhlm26FLACb/4naL9NP7JpnqT5ZiZkAq1GyCzVKeygguXKgcFnQEwgOOMDoVOEmuqKotf6QuBalfIQuuyqpFvbPEfVNkYpdcv8wMOk5X6apgIojtvzfjQTlXJ6hW+yYLr15AMgAhc4j877M7Cg9mlGGrhBUEv58oKbpS7AzgtGyUc9jOY5j27DVv03g/xsOzyxULolozBto+a9uH8S7Rt2Y6eIID0lp6gp0Eq3qNn3B/9fehalR1tjU3LDhmFJsdukOxIig0U7SHyM69YVNZjvt7an2P0hlXiEeyF12hq3BAm11h251D0I4Psnn7pYN5hIRrCItTkWXHI5FbMpqk2X6A3LeRihuUwLJr7ufafZS4DXxL0r5/dKiMv4yVIsU6aZ7yGUzu4jkblfoOU/paNXPggvTLeGpPrmwrR6God/RCvjBNDKl6LgnWOXP4gLdSee8OiWsos4B/xiKZNkmDm+bHsh10tgo0ixsowKmef1Xz0t4X5HWElbJvFNtk16OqViRm9PQg85pzCijaFf81l3KfL7PJIa8xayHHmSkOsc3Bnc30lyIQC/A8dnTxAk+PwaqL+P9RWB415yumtQixM1OPfUM5yCJe+r0rzdrn5HXx8eizhH2ku/yMwC48cIQjg/yZEdPA524TgNHXSJjGknzbh1fyh/1bf8UNZOV6G13n67N39Sywf1qpaHCPyeE0yxWQGfOjtJdaeYtfk3rU26PI+rl5CDVJOIhGKJSw9N9EYY1RISakjB6LL/ypY79hd8QRizxf24HKcOP8YRZsoUnbC1R9AFJlTkcAE60Jbo1/up7uiXQzrnvT4mwnaYIZPg74p9DWr8g/b6CIFe23KfHwqxXjpzoRQJmncsu5vENPqYOy0+SZeW4ZOYAalv3ypTzfSEwusd1VOVVvIwmuyqfv7I8qlJXlKjtoMdqCSNVJsvR0Spgt8AjSDlsIpW8Rk7yfvYdW8wM3JpY9eZV9GweqhBtmy1Vh2/pz/Yj9pwZLDAHE9rww9YBHHb2nq+nDrPQipn+wENAwc1DX/emu9R7jVLuLWBkBV5TML7U+eIH/NMqkzrpMa3T0XvjAIH0Ism54WWQaLoSug/bDP/Ckz+tKLZ+qgAICbWOwFKR4PkmpKo2TMCyOIr/kfVjU7ZFfQqzobbRnNq+xJ2LnCuHdUA8oz1nOgsGLtMbZGfhQwzu1JRV+0nbuS/Qy4HfGqY64F9Clw2yebOuS7BZgRc355Nxa9XwuDS468wgCfHd+eoP48VmwPpQ0aCCV//eRi1rslnNKnHIwRkdteQr39LeppeiVOtd9lznFzSIXTlGNkdkUkPUzEnDn8LIfl4oS7N/krbrC1TRaffcwNZ+ETdIX2GpKxkZr8q1fxC0lmFVVojnZhLLjBsGgNoMj8IfYaOcgEyNSiFpIb/4wn4+Hp4DI2DpMq76EYGiXeLX4YgJCgJAI6ZkrGLA7S+JMHXkgtbmsLHpqXk1hPNK2xQOrTw/UcrR8ZzjFY+44EloTyviHiJbgCUoEQo60riWkuXW8WJThePDnr6ysszgVkcnSTB19Vyn3ujYASQsRz2j4WmYgkJEFEJQir5dT9fkdoefqr/LuMd1DLDCeIjUZQImpPZ/8//rwv8qSXLOXdXB+bhGEhK2BRmrVgCzC3fbPmm0cN3WiJ/kWPs4pt+ClPVlz78BuCeYgDIuRJocvRiJHFz/0q+XyKhGbZKmVT+3wVCdyyh4LV2Hkp0amsmJMrK7T9zZfkHNVUNGu17X4siytH7/xVdBT5q7Pp9qZo4TAtxau5PL/fLFsoqj4R9+xuMf64/OtTTc9n4nv+BNpxQRhQaejq2RiUOs8oRHAnaefv/p0cVJH9pKf1w7glTh3jDsBIe4v5HWh9lfFWuuZjWyVC0kjBJoKSmNMWKHdcOiVCMYVni1sCEex7ZvRDyIAWjLZZoLiOZtmuZ7Lo3nDUMVPBud0TOtoslH0u2uhwkL4rqW9VN0MJovwSsG9c7GGTXqLdpg3inlxeSyq6z/sK/uYQZIG14vPoqCCsIvDy4jHzLJ1VPlaTEjy8tTmWGs6o47sA3y7LAakWpdTdGvCw/Llwrw5kZ5c8BtTvumFp74uOJ5GwUFpvehrTxxj7f+y5H6Nw7brSYOaiM9zUsCj6N8fv+NzyWMzPOg9mKA49fVwLgLrGT4JCkIIEjByi0m1W97P48TaemCAyp+8hPyRg1+hc21vaJPMFj1Octd66TTANZ5nhVHt0mGATF1RcpXQE1h7Fm0qAadXw1u2Wgh4oRiJP5YiI5GiKRTAHVSsYslmi75YNb//oyWmMUssD2KJ3Lmyp9JHYmPPbkos6Xii4spYvJ5aMgIrjkLdQ5HU5sb0mYetV6VXAVy8FUMwB3bOQpf+DwK8ULJ44QY7Xfl5hEHs+Za/rR8ISgtMbPGxxHsSFfzIRuCNDbNxUQwUnXkXq/dIsYyNThHtEGB2dT2tUqiHjZMbDT5A4aAhL/ifn+g02WF2EVeFO91LmMeQdfFAysS/gFAL9cQTDrIC7FCPeyTFuUUXduiaqr4PDgOZeP02MAaKzQgqbwEfkbDPLsq5P9MgYkfU1dRLm+E2UwEH8dxYTzMI/Wr0nl73pjFyleaYuvS4riSFakS0YRLWo5SEJWkj6qSOHfZP12sxmSaRM9SI/pf1oMtO2L5EGhRTNOSEFfkKrX0kVg5qQqzRXjhUOHnC/gqPVsn9aeNW/NBHXwJvoJS+JkodCKP9vYZVOwGlxbn8Yfu0s9Gc2ifHyF6WJA7ZHiLW3gyOcZT2KzollEztPw+PedvpkTzDAUF0cUVT2X4nJEhPPgXjt+Tmp4rTLX3bEm/3guiJmZ5cAohAIgSTDmF4Gs5abXgmKBf6R6pW2hoJQb1xQK8ilWhWcnsfKAHKFyQ/CqlS3Mkh0Es7qsJ73XuQRGPjmdQkQKAcoE9LGhmvNunFb0q2A2gibEawrWUsAYqwOgg8yAS4i/4mlaFmWAOz/vAl4K22DiculQp7gHeo6zqpfHGAwgOkvVXWWL35Me/ZuWlipMioqsVIGn+Xue43k9c8zVoqWUHkbBtiDWJVkrq7xRAPoXiEhXowA84j6HNweiEB0ZroLHkFhdbbVf1pHBfRNMvjg2SvgO64pQndKQtNNb1JmFYUee5gp//vVw/AwviC8b77sbzgJ9NeQaK0XuAvtmqjC8kaOpiDu7UMFwtyhPV7/sXLHDIM25/A5nVK+mntteSZKN07uag6bwUu32QQ2O+2s9fdUt9YBlnzW0UvrkhRRi2GHxNxVFxzHTuqZnxtCI9q/lx3NLIw3v6myE+mC1Fx36/DLXpTP/7WLCO8dlHhW4Yti8mqz1AcUvgLbq+v3OoPaFHnLQtLAQxcE9qXF14w+GvenaWRUh+uW1Xe7ReVgfyhqpKNYhbymx1U7SwpDx+10u6jdOrwJApiP+tA47Ix9eDPKBImHqlCpQibuF60WsmSa3puGWbUqLjk0PttJsFhtSPCdKOS1+HNP67XjXKv4ksIBVcMa5aJ78BJHCjytfC1BrFUbgkZjF1Gu3HnRnVOzVWlm9inFCV/5qXiBCIhSeRo+m60NHxI8+m0sJpJxJ4pPDpiqB6bYJz+YoYQBcebGB2gMq64nbkolUmGRGTjYF99NGu8JrmWfhajhrSVeIKfkD7WS1fbB1Pz3mk71fFbeNETi6hrSzQcxwDzvxPvR8q2ufM2amISaig4K+QE946WWsTBeVJ9XvjiG3itQbqNtNxwzWT/w/dMXiyh2DW3R11agoZuae1wLsrE161GuJrU2C1+OXOt2hG+LWxmBBU35FJFvl+mddrEMba3qhmVSPmdU/9CNDsgCyPYREfhHT/YTzz0/hrcx29Ae+7TdH05q5l70ZzAw1Kh+piia6rtxX/oYVDP21/Ao/XKBusActEvUEtee3L80FVuqrYLFDmbj3t72zlZPN14eWpwLbDdc9xuxlXgSW6JrGu0zxGji43ZCtdOfcYJkxEK+OgjhCmYSGjgKBW7vdXaLMRwl0lYiqXr7vPdtEoOcFWDEJB/gRDxjEQnLNqLLm4wTRnSZ3V02ge1JNajsVAuAB0+K5bKE2eCZdCoVlJ4uxEco+w0d6lch98AdXUznJkjUI+83eCX78N5DL7b71tDkz9N77plejso9JQm70EauwOMXRpgI0C+El8rj0IxfSMIiHIxxw0RuMw2fu7FVU39mBgVLB13ug2mUnQAgrpDT/CJ0O1ShzcTr/NdkNeExNCBegHCDVrqNiV8AbbglfTI3JMeV3/xRRzCrwMxkPdK/so6OwOInbANphDnpciHatU7iR3pyxExPQLbTVP3b3vZReLt7biCIPejHeHJXXo3IpfFwECS+5mawzsnnu9MNEkoMQ8M03gwpg3lk6q2lf2UyINUMEKnQ0A9BOWmS39TQRgmof8D3IXvtO8KgGVJ0oyJRe5r3igV6P+b78OCN+t4fmTujpPwW8QlEUJn2G/gJnk9qQEU/d2Z6i++NkhfS0fA478RNjLzoc/O017qjQQI/lzY8EfegVyuDFAbzUPQ9C4HGniGgrK7PlYHTwYzytR+4U1NdmRqnSEH7wcQRh+xlOpIZRHlYxF2ns6vQw9zBep1Z7Z3y6HlpBekz+Cd/spwSQusBVooEkHef4YmSb1gHmGjmxW5eGuZXPqpHBYVFKp8LWwUv3pAK2e18A/faml7yTcgvi9qUEJrPXETwnSkDeHllBXgDDByGkMgcMRCUxz6NeI9eI7lqTZuTMdpm/62HTN8pK7R5lk44Oo6ogMyJJL6V6O7pr78sDD+6S2iOaBS+W3TvxnZP2LTPRAvYAFgqq/LRzT57+2K98dbMWbYMksDphRg+Wzma8+6365hoABiUkKUX8ZTIBPi0mU22hfJmTBDBdMcs7AAfni8Qz6YDObshMHwQ4VoXiCqzfefe2/tNk+Po8zzullM/IH3KLamZo58w1nVdxPHdpHMSjiOPK6jvNHucOPppuU2K+DEoylariB14rg4ozKojSj0WcseGUD+HIJdzS1fcfknxeQUMLD842Z50dkS5MPW2c3E5sGbRWdnwtdqNrHhj470fBE3MBaJctQshvbnceVRReBfhDBw/KrOeNsgOmw9eHqUZfz3IXXRgJAUOS7c8lKvPyc36EfrvRptdjvtD71CXPlaAHniZEhNdVO1peDYpuPQsbcJ8hjo4gcKbLEkQkEx2t3CljRmJwVGhGo1gmLihPaQyGGZ1B3r1a1U/X3rmD6XhZfdeLpVcZcVcR/gATpoujol1z18Bt8/P8/d/n/bqfBnL5IqXYo7aP4KL6pgz4QoT9X5isp+i9OUvKIvdd7BvxlMug8as5d7R3lVU2Bm2Er5vGuMligpxFH97Knn7Rtf+BR9B55xnHmfIOcX/VpCzXAXxBC94lEhlT+cLo5DsFQosDrCEJzN8TFRzIN9yv4XYIxyEVyQrpbbIKxM1Ab/2aoil6mOVILDlD5aesgpKIVV9Mda/tenQdhru3rMeyxdEk/QfzdgpaZEZS31CAVBJD0Kykm1J5dodW8uKmLbe8fRHeasiJAh3b7rEaWRdDI5GsQN5j1Q5llMmzMaWajBnWQMcWeEQXFYc0h19W0v9lIum6lkms1hBAUjfJee2y26nYRYr116ITV/OQu9av6LyOxA3E1iEoHt8lSyn7Gtg5HQOP2o9WoowhU/tntKk9hMm/cLP3XjoI1UeV7iDdFsnqdg1Dnk+kCZDOVnu2Jb4VJaCBITLhcN1cuhlkTF9j6Ygc2l47+tvsHvpKSPsce3wlvnGht8i63nLrVKBaaNehJSC+oxN6QP+nNuuyBHqg/UnP57qXRXWuj//ObXbwPkENxvl27KDp0WVn3nepj1UKeBGU5Epb0rrNydK+4am1IpVpM31uFYsU9uPt81dZgOMZZJDx2mAbDIMu0AlMuPw0741bPv48mXOPq4lW8syEdAYtRZsmAViTqBdu3MPBpEtSDK53p36fb0nrwyPByBVQfr11Xjao7qIYNDQ3sXRQj6uxFqXP/1X+mu3IHbLrhk5IkfBa0mZMW7Bzi+Vn03RNBYdRiVuUTGGvLiRpKL2UZcXDekD9yTMg6XOXM/WmKigfQPyNPqWhSlZ4RqTbDiJWkVS+6F6dSK31rQVpYVVutAwhWuUSL4FJ4u62uvEF4cHTJaCgEonNPB41kf8ujnQnYmc8Amx+Fmi8khdjb4WSqVcBvtUhCnrfDe78xlgmza5khH9kwPHknFB7W+UkBZ5cu6uur7xYr51/xCBTQvStfwOYTO1FswncUit/OqjrjoqG4UqyCSiqOvgDPuugMEjSNo9uF2DSE3oZssEwui8fO94g9c8EQnVeh1/cyOV/GoiVNJabrGs6xSh8ee9z34vO2bj2xS9Azh5vIOQAQbXUBQczr+wuyMW01ap1YBfIcqFHNHHLziKciuz+QhZo15buzuhsgOGvEayCsjsPFC1m4YsbfQBIOCa50UOpl3rUwZOCeX7TpgE1YyCdV9XAJqBtH4ZPFM6qOayOgJbF6dtJVAOfiDySfbdzmFAsWAgFZaKHulRCguLxccCoIlvedHwVnWosfX4M+Vis0kx+b6Xzxn4onDj0b+qBG3vpkQoqr+Ky7sNajDpmD1QYO63/JhZ33Cbj9G7jDkCM36hd68d9UzOQlnbNbZ4xxdu1jsq5hHOtCxdCGKWXPYyYv/uLvFLA1ln+XBKrTLAtO35Wgsr6k8oQ8yeK+ZoZF2hew1Ofpq2/GjP4/+jQB7EvwGi3pz0U4QmjSb56ZSUCgqIE9NnG3YF+TSDre7wbzTShAzu2K1/PQ/3q1h/er+s0tAHLDySZQ04XvxpSSB/ygKpe2zR8OW+SHD6sRlFkbe19xCsRcsLYNBTIil6ZC3MuWLQvKtU0Oq/VIo1AW5sxvtiqsL/dq3FhhSLBBskMp/m0/x5BHbBlij3AM73+WIlGD9sCd0sdDmd2J79rAwt1OERnhsBnsPfHy6pmiENCt+KQPQtq7jyXHQw+DbXoyXXpGE3eOmPFoDXRApMgvLi2aZYbgAEskAbBOhnmLVWbX6/9lblWL7m17aHvC+pE5r62G+zle1otzTVIuLL8KuvmNuMqOsFCRiG9uP1VedV3cIVmJaS5EGjRlCB4GsRo4XmQoOgmgE8y65it9+VOJrNAUZaxy/zf+dxMcNFxybIZUowjcpRgdKYYMnY0+/OIFp3+QZ8OSfqxRAidpGb5GTmYGneJecDZ8fUetB8vz5F1bWQSVlOJAt5sHkl+8mx1KDmJ2YWtdApqbMjgcXFePnJTlg8NqpyJTE7hgCgVcxvRmPULXvqIRr2BJKJI0UJ1vpyoCWWNtKG6Q5hEZjEk/N4jZ269157N7M421RNIT798Mgo2+rn1wUTrllYj1MkDgQah+z41ntcpiOAl+hVp9e4X2Cipe0DYowY9NS4+l7c99VP4HNBvMBIwi5KQJEyW55BxsfrJ4/WR1pWlZec+CADLxzUuOxQyq13rqA+88OliI/nsm0u4Y5AiFgJb4zx1jk0EOG9ca5tR3/RWmGTYwjd5JL5kcZICn5YNaoXQSXRfpJ2iR5bMo6HQUnKYEhWXRIRf+Jm9AKhG20UotTBEXR3GzfWPzcljU6P4SWds9ZyNjIJpsDIbEtGWzgJIFrkf1H3Q7cuS/Cc5LCTcHwQaXzQ99xwoMo/aQ/ieNPGlgylR/I3Cd5jPuLkoX7Phhjv9X0vFhhcqc6v2UXwPyqrix2uvk8WAtTqyQo6474UWbbsa6tiDrSYNO6y9JNwLjQ6MYvbMTY1Ao997BwdfyMGVxLp55l3TLGBmfpCxem58jwF0Gq27qrnWNXOmftlyCCYnwKWcwrHr7Qy0RGLy8DNSQCG/UPCe5WKKaQYBJZc3BLbmNHj7r1MwwBE6bm4L4/DlX7cApt0i3o2Vsfr5d6tpU4DY/qaaQKH2I78APgrzRkMdvAlIOIqeqxh4x6/ttt9jIcbKAhPYdbeTmIHVKTN+bweUDiqvtvgYuhkVuF6fr2EGffn0TykxPsu3mdh2PBQQz64t9fI3CPgK595ksWFwSi/uaeTUgAzsRVFoIYiv3lKrrZZl8Grwt+KlnE2hgFfKtzagXoLFj2H6qurqPgvmzA+oU0hOezzNoZPR3D59cttIh1Ln+MqD77VXxCGZOoO9FiZSCdOtuFJPbbvHwkDK4UWqakkXN3Dh4X3P8VpuvArt4NwYl8+M0Rb1zjPoSuZ5tALx6iH8yrIZ3HqjwNVqFwKbExkCHMdhj21QeqqdUnx3IwsrqsOEQFfAZQkqjAqLql+E1cxltf6BcnUsZtQe+MDCgQ0vf4iS5CpWTQGvQD+H1BO0tZOshaojNb8QNvJc8hHaa+I8pA3uKhephVcB4WGtMMaPaBuq2rGgBAOAQgAzmHRm4Cy67+MwwhAA4MDc6dOJxfBYyB/w8nr1D+adhur5XWE+fUITlsOFJDg4o7NvYDpaxjGXRUxOjkvOXovbGRX0XBp2yTpep+JJSUTcfftyfhk0owHPBZ62/MOcO5mFILQ28HeGE13LcZ0JKMRzBb+Bm2EMY0/C2jUea76baX+Y4JM7ZwYHpCejYAPIj0Kkz15/eCEVHHnuuJgls2qKgrS/McBWzwaHIT+ePXJF+QRCFvM/1kaU+c+Oglaq1sXMXRM+QpVQLqepu4OVeith2EHvg4jiQTfQrey+n5qSWYwBCbtF/FgJqKGbUG9DUC0Y/0CAgJXnTAtBiCScPtpKYAKKAe3aUH/aIncuIcJWUMReVPMLaurAZ9NmBJSBMInClSyS9DwpTjNnGkyOy+mlb5B/yNMqsl5zG6/WkzWYFzeHcNsZr1bT1UFW045YW2GdXTdzCdf1aHDZ8RKcPCGahs+tB6c7GCWXmg5Kuthn9VI19xPvF6x0Vot+pEpLvGl+i83VeESRYP43mOVemVBwz/zRKbRD/sc6FtAhgJKzizrhRShj1rpLyOmL/w9EhHwQvRVgx5cxO4iis4Fj+UuiTdoIHRgk+gVmcLmdX0g3YL+IOn77iSGScV+BT7PnxZf6qizyhe55+QO4KMk+eC37fDvy23qOuPzTfN1ijgWprXmpq4Rmftbx91HPWblWO5AhK944eIc3enA78lf4ysItNlm3lfkqaSWk6x/y1NUHX0X2HBGPZsKIz97/5oeOSd4CVT6PZBcMvkEEn901xJpbhWS5yA3Zs1xhQN92d8c19BNEOjpIOv4nJhoqPvjJRHEK3T040d73JbTZYsW/VE89RrRx7j1lzGflISSg6/4lPY453sn9wtwgPicGYDC8AmjahACAmBEzhqtUXPOaL7VmRFf31yQklclBLLd4z5riqhnfdUZ9wH9WoS2ckeU8aoVPgceWoDh02PEVt8l8+ey4HPlNYH842bzBWW2A6MH8jBnjTMuD/t0EX9gaTmqnCbaY3Tgo8YmEMNXWfuRGhuolftwuUvcespr01FnhuJLhdHFNPWWzEvm2lQk783SwjuKD22GbUViWReEDQaEUyxwbhOECBLg9GBZuK1V10nyAaUj5xxiKTs6LjMe95Bg0KkrHsFJ1iL3HOQiz2jB4yrQkRIF6Hx5Ew2imaylqhJinR2DK3k80Wf3Gn8HdgLlqjY2TSvOs8D/vif2s0w9rzwTHDaqgV4rcve3XrihFv9AX4hCDMTMkflNHWhJY3irw39hNQaXbDR8IEgzfhKRqav1/p8nYi+57cr0AFQY84PNI4rwupXLyZQ8D9izoOAz8MxAeQMEZqmLffMdLQw6qvwE+8ah6HgTc9rbXfgRnZ3C3FJOOSj95Pz253aVAfELGp0ZeCgU7/HSGB8w+fk82vY+NLFx7/Mhsy0/Jgl7Bwvbjagve+1nQrXzMAnF0VbA3Znf3n9YUYIWvLvFPlJviPfR3P4QIpiKPGV0swmeR1/JL9fFDmerK8LvR6un7NE+kwkk7Q/U4X9BdmpB5yd2hjl6W6JOAGJ42b7b0x4fa6gR634FivDTTu1lW6laPUhWCJrin08/3sPP5YXW1lfHVFB1v2axfEAvfe3PRg8qk53s5hBZUPQaHAtsen2rS4vOsPGxWeVKu2l6UTjynRZocehBWALPbjjcqmbtaiTphsTjVAEdlli8jiH7iJrNB5HSLYSBNYurVMkGy0tVgFtDZsy2H1qNfknSRHT3059i9RpjO55q5X7fMzQAuoeu9ZbZugkxWUjBfgWvW+iN8ddHTN0mKG43dMJvE5oXdDkUH+EkqSB3QYWz6aToVi0QxPqi/pAG8c06YhNGVdp5V01/jMjHLGMpLM3tPOGB8obyiDWHiBtI5jjMnOBrhNihGVWLh1dpOu5oRcHTa1DLGJF8/bNIF6BG5M4dly4vr3IaylYL1IqeyXSANMfDHLY7JdT8Rf1cETXUzf+mTMRdF9tgGU9U/z7PjvdDUm3WQdY9AZhGlV/bjPBN2+QL1+yrccy273bLynuQn7lwoBTWJWF9nyKhBtjfVdgBu+zEg4If3zpv+0jDje+mdV6s145fLS2lbXKIv9Wl+dqCihi6py4GvGJkHHXYlgmLBqCPETgDoshmUpH8tX3vOCcEean3+xvzaIiOmaqCV0rhCJV9yD26AJPSqmy238+thJszPgvDzYbn90k1Wytsmg3mhyGQRRRDJ/LhDx+B9PC76hUYk7OWQoAe29txIIg1mz2VewVx0Ru3PkSYOPV9e9DvcGrSBR6EWuV+auVWJ9YWYofXLuN5/a/XLPQ1xQH4Jx1zq6fTaDBIauty1GIMZtgoqV0npiCnp8+Jzaf6DqUAoc8F7XhTbz+6OQQPMv88nMpDCFyWyfqX9cKPU9JS/u3n1Btsk3CoQn3d2o3eyysizMLHTsFO1jo2WJVtl8RvMgi9iQy4YWZvtodVkkJmPxSM6DVwjnVI4jtUuXS9Qt0QF4+f/AEsl1FIXdJiaxYGTMUoGCMj9JZAHVP8uxDcDjp4p9d+qq6+TI5pEgbzzprrHax87UoroDu6aHirLH2QX6/v2rworYIKaIQK+6rN+lggj0UDjSQ+cw/d4T4llIvvFJvMyvxVw94B6zOk0xVur+sbLt+zYYdnFq+b6QKwA/0FjZJrfMbNnV31P2nwrB7hVSFuCQT7hjrkpggBOqiao7EDalRT9tLFJbSuzZrvalIj3mck2x/uIGR76kBBKD02UmCmIO4Jq+zKCaHsnnDm3v7t0npBpJZLwDPX2Hhtw4LOxe4P8Ne/OPpiQ+Yr3bJ3NL14MCPBGPRSqvqMsagJw/6aKmocKvaeQVWv+O1omtoANslLDt25Tjv4xvmN0m8fgCDHaznUwtJcgQS6p4ITCYvzOJ/Q6m/VKG7WK2TV/LJTBWkv8osmrXpGtDt7Rn9gw3f08TenCKwg7nz7f86nu0gTo6dt4tEZ7fPA3b+xNLWYyZ6fAHcOG1RqHxZC08g8lZTraxGnMBreZhm1bY9+Uefxk/fKCALfcQ0AX61UMCx832bkVA9nHQKu2Expy3h1Xoe4YzbHh/N4JRE72X2aDvSVRLW73f9hFomIyXmLXAAJ2vLY3tuMa9kttkQY8ryefKngOlrgxvUKVdMq4fNrHuRF//sonN/P2Do+p+6u0Kb6JQ4I5Q6bATmlkEwOLP+gxlrK/qKktJ2L70kfN676uLO9IRyYkANtBIyL8l0Syt0LgnOreoCFJffm1to5EefVclDVeZKvVB6c6w7qv5NaaxgxGGiVXFNvKoqtkeFCW69BhQWdPh+j6hWIzT3ujqslZy13OyZzY1KmLy7+ZVP62bQGiLVtYoMW4qB6B2i4ifYMWhgCySBHRrrNe5steM5UxpMkROzfeVSDgTEVMcm96E/SFsxyu13wV6R5kX30+CQF6H5p4i2SeHp4R8lja3zj6U0FPUKzlpA9pYdNKKo46Nj8k2RyLtaxGXZWZAN0vnHPqtTtUGfX3s2k45lBblk7AwhnNBGX7mPL4t4CMRULZPnyhuMiIf81X9Twi4gVU7kr4K7pv2LVtQ8W2ZYP1SGCHCp86rO3TlHaKe/Sp0YG6XFCD76UgwSlZKLx68gX6wIUYM1BlVcm6NOLUowkLPmTkgV4R0VyD3R300wOk+8S6ZyHXpWxQM/t4nQUWh8gK5QhP3T4nwgRXQL0llSUbN7fv385D7gPJrHiFCBL6i4KpjZ7p0ms1OtPqJ/ehJj0+a2uYLmZ7Ye+gfz8WdI++z1uiH3ULwmU8MLiyG7de0q+BiaW7jQtexlEgHvCYs9LmIFsC07z9F+nR1w2DhugooyI6HuJI3t3B3h+trhspxpl+JCNrI5NHwk539vKa8TPboXN5K8i0RMUCnBkXSVAZJVJTrEaTwWE8RNrgabcikiajEVU0cjUXfVujUw0RTmTsFCGLI+QwB0E9dRlQo7VxuPMlJ2vI6EoVJLE+WI3ygZRyojO4Xi3uZsdu36AiNMqah1CCm1uGsfpaQjsWllSkVGxNteGSm7uuF5fDodZ/l9bKDInFUA3uBwEe+WGj6iG9UVJ1lbp581kxTsD4+/Altw3UGQtNCfJyx7Ei72U3xKnN4UokeWFi9QeQCVtKUpmb3k6CLAttnMEGLsJkutuZbiD5G7lre6esNoPDbtnsPie4NoYFFkG2zYS0Xe+Wee8r4/Hx3UlG9MyumijF7aGjtPAzEThbvAhIXFLzpjfG3bPHxOBYL7HapW1VVgzbgHB2SAprp7Lz4jvv5yPpOMikT0nd+DWQ+33n9h88lnynpXV2uHF4Y18oD+D1nXHuKwk0UQkQXynsicn0m743Lx0beq0YIgGthMJzFKlgaxhaacruVjK3m3Be/5zPMuEcSk6Yfb4wdBcTtCxw8DsrppwcbdJ7Rpww1lcwd1ziyfj176NpKqHuzvgtGJJIDM6YuyjigG2Fsvl1F17HfqNw2hcY9EiMpO/5OEV8+Ox0Z+0mq5b/2OHZk9fJOO8CMgcp+ffzELCTH20tugoksWToexQOu6gEwI4y5FW1tioiYQVx2iodYGlaNkvCNWIEQbNC24c4COXIvmc2U0eqmwo+L5o022wkv5em7LM89hUBzprOPy8kvI6efOWsro2j0wG/to+F3T3QUJYzoZW1Srq7z05k1SgdUscRjrgzzlK1+jzFO0RVi1um8E2dRPI7mhkueO6reKkpk/+OfCwPRvp0K8WGRAvVuQPe7BFjFpA3c0VWTcfLB+yoPxfqjQm2UPY43p/8cn1AaOhJDe9UVy5c+vfU082TTIg1smAxtUEUh328O8pdPz5kAIklg0zbMUpOPNFka8jK3/DA9m36Qx38vWzy8FxMlgrQ0fPGISNVN1kVp7vBKox8yaZpqmkGy6BDvLZJ+r8hw4uohLpVFcLFqPZEEBtBioUnwkkbbSB0nb0P2T2r5SKzc6ZPXG99kuV+n5XjWQRuQ2s+RoHTSqV2qBmpBeVEjzPL8gyYTP5T7XINHP2XmM/yEQ8v4zwN0822hGzBSBKckU5ybuwhFP2+KKW6oE/XVPLBmP8j6BTkz/vgR7yb8yxmpBeOfBR5hnPqfRjgLP6cgfXpRebO7rAUouN3RvR+7w6ewmLf9eh14jNF1yKJZkfzy4rQeGlT/9JgCNkT1Vu3hREcL6w18JQ7w5ifvD/H8NZjZVdzDnyPhmn7Lq1sAUjBJuOVjkpMWldWGuHcIbQPROXNZNT2HcKztZIYahzAVuy2ksekze2k3nkZHIKSSBS0fEiZjSABCjqdGM5pv25AVI03ZA0CsezUwTcX8N5qgEYl8We3ciZBFvu5qRzPULGxb3OS/euZXw6wOiaf3KwP9To4+v0+ErwjGsJyUCIWp0U4rT5JVaVuFC3e2bLf0GDR+08GkG0KZAc7ol8bYnqLoLA7amOlxt8iUt9AB6eBddW6kPOwu/pRaONXYfJNx+S2cAPO0pCjd3o6iwme1Vpq80dOCcZuYTHKyEqg2P6YKMBwdGO56m/mCcbDcTEoKZfOtr9eThOxfZOcjcrosnoGkhuBW3/tNvNQI23SWWeZhiTaYrrd+P5jFjhopSyzBkjNjCDrUsNRILvck4gY1yHA7zH7nwnAc2+lps8YP7p0tylS+5h/JXi6gK8da116PyjYhwrUrnEDrpbkWj3cqZB2Iq5rizkmhBV1lGNY0zpX1C8X+AD2vW0XwPRmxYlzDxOau3HYVRAAOvMtmZ4olAN6SQxl6Ldr/ekYCX+BAWh5EAzS9bFtuxqWT/epE0CeNqnJ2SWfpSzVXupyJWfD3CqJctt2N2yRz2qNWfLQiVtmgO1sA8PGPWlydZfwMwb119XKNJlZ5gILfeQKw17Sg8lNCn4jHc5sTHS/asCSqXp2vij2FSUCKi8rRmiuja9qNqgMNuCwGfJPLvREM/688PkMa5xKSBFIdfg4OvocEMlFakSQygBnj3mu69UQQTOztgg3sizFDShNGspKOmAyyesOxm6lD/XN6P5psA0PB5fxD4iBuDNz9Yip5GiGnJiWgc2DrYDy/SHZTu60HbbWyhRquq7Fx4cw5c2wmqBctJPvY7bqOgIY2LjMcDVckdqSvPNp+zEYtpOtB+lFkmWrHKwS6qL/EPA2dYf8CrSjysRLf57pd2HUkhAw6TLIYwItaOQxwgwicXB/ikYEz0wPQ/EUvoMzK0pdHUfv9VCeYnq2LmPTbjt6xNQxI9KwDiRHhC872R0hnImKk/LKCQLS+xIlUiEfzOEN3irntLIWbtVQeIWH1F4BuD8oX4Zfk1NAPG5s0VUqMwAAA",
    address: "Koregaon Park, Pune",
  },
  {
    title: "GETFIT Gym Magarpatta",
    area: "Hadapsar",
    img: "https://th.bing.com/th/id/OIP.VEoTv-RPwVj9SHHEEpkr3gHaFZ?w=257&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    address: "Hadapsar, Pune",


  },
   {
    title: "GETFIT Gym Pisoli",
    area: "Pisoli",
    img: "https://th.bing.com/th/id/OIP.DxcC5YxmHGOdbErgWsraqAHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    address: "Pisoli, Pune",


  },
    {
    title: "GETFIT Gym Wakad",
    area: "Wakad",
    img: "https://th.bing.com/th/id/OIP.quXtrPl74QNZwTASX6kGmAHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    address: "Wakad, Pune",


  },

   {
    title: "GETFIT Gym Park Street",
    area: "Wakad",
    img: "https://th.bing.com/th/id/OIP.0mffmXzNE1hOrroqbP5-bgHaFi?w=246&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    address: "Wakad, Pune",


  },

];

// const filteredGyms =
//   selectedArea === "All"
//     ? gyms
//     : gyms.filter((gym) => gym.area === selectedArea);


  const getRandomGyms = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};


let filteredGyms;

if (selectedArea === "Default") {
  filteredGyms = getRandomGyms(gyms, 3); 
} else if (selectedArea === "All") {
  filteredGyms = gyms; 
} else {
  filteredGyms = gyms.filter((gym) => gym.area === selectedArea);
}




const calculateBMI = () => {

    if (!weight || !height) {
      alert("Please enter weight and height");
      return;
    }

    const heightInMeter = height / 100;

    const bmiValue = (
      weight / (heightInMeter * heightInMeter)
    ).toFixed(1);

    setBmi(bmiValue);

    // BMI STATUS
    if (bmiValue < 18.5) {
      setStatus("Underweight");
      setTip(
        "Increase protein intake, eat healthy calories, and focus on strength training."
      );
    }

    else if (bmiValue >= 18.5 && bmiValue < 25) {
      setStatus("Healthy");
      setTip(
        "Great shape! Maintain your workout routine and balanced diet 💪"
      );
    }

    else if (bmiValue >= 25 && bmiValue < 30) {
      setStatus("Overweight");
      setTip(
        "Focus on cardio, calorie control, and consistency in workouts."
      );
    }

    else {
      setStatus("Obese");
      setTip(
        "Start with walking, clean eating, and regular exercise slowly."
      );
    }
  };










  return (
    <>


      {/* HERO SECTION */}
      <div className="home-hero">
        <div className={`hero-overlay ${showPanel ? "light" : ""}`}>
        
          <div className="hero-content">
            <h1>
              TRANSFORM YOUR BODY.<br />
              BUILD <span>YOUR POWER.</span>
            </h1>

            <p>
              Start your fitness journey with GETFIT and unlock your true potential 💪
            </p>

            <button
              className="hero-btn"
              onClick={() => setShowPanel(true)}
            >
              JOIN NOW →
            </button>
          </div>
        </div>
      </div>




      {/* CONTENT */}
      <div className="wf-section">
  <h2 className="wf-title">Explore Diverse Workout Programs</h2>

  <div className="wf-grid">

    <div className="wf-card wf-large">
      <img src="https://img.freepik.com/premium-photo/person-lifting-weights-gym-focused-strength-training_1150043-8362.jpg" 
      onError={(e) => {
  e.target.src = "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600";
}}/>
      <div className="wf-text">FULL BODY</div>
    </div>

    <div className="wf-card">
      <img src="https://media.istockphoto.com/id/1002239460/photo/professional-boxer-working-in-modern-gym-with-city-view.jpg?s=170667a&w=0&k=20&c=lS1okkVgY4mwXDJ-W7NDWGGUZu3zsuD0SYKqzDce6gA="
      
      onError={(e) => {
  e.target.src = "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600";
}}/>
      <div className="wf-text">KICK BOXING</div>
    </div>

    <div className="wf-card">
      <img src="https://media.istockphoto.com/id/1224097850/photo/dance-fitness-class.jpg?s=612x612&w=0&k=20&c=LgGnAX39OG-Z1IThg60QDUqpOA_nK91AufERSFmGMOY="
      onError={(e) => {
  e.target.src = "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600";
}} />
      <div className="wf-text">DANCE</div>
    </div>

    <div className="wf-card">
      <img src="https://th.bing.com/th/id/OIP.pPI6DH2l41SES32x7XRkxAHaE8?w=248&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      onError={(e) => {
  e.target.src = "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600";
}} />
      <div className="wf-text">YOGA</div>
    </div>

          <div className="wf-card">
          <img src="https://media.istockphoto.com/id/1204577442/photo/low-angle-view-of-handsome-trainer-performing-zumba-with-multicultural-dancers-in-studio.jpg?s=612x612&w=0&k=20&c=ALBWRBYnLIz3tl-rnSzk9Yw8h2IgoSon21UaOZRo8ow=" 
          onError={(e) => {
  e.target.src = "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600";
}}/>  
      <div className="wf-text">ZUMBA</div>
    </div>
  </div>
</div>
      {/* shop protein */}


{/* SUPPLEMENT BANNER */}
<div className="supplement-banner">
  
  {/* LEFT TEXT */}
  <div className="banner-left">
    <h1>
  BOOST <span className="black">YO</span>
  <span className="red">UR</span>
  <br />
  <span className="red big">PROTEIN</span>
</h1>

    <button
      className="shop-btn"
      onClick={() =>
        window.open("https://www.muscleblaze.com", "_blank")
      }
    >
      SHOP NOW
    </button>
  </div>

  {/* RIGHT IMAGE */}
  <div className="banner-right">
    <img
      src="https://247nutrition.in/wp-content/uploads/2023/05/combo-mb-whey-vitamine-fish.jpg"
      alt="supplements"
    />
  </div>
</div>






{/* BMI HEADING SECTION */}

<div className="bmi-top-content">

  <span className="bmi-badge">
    🔥 FREE FITNESS TOOL
  </span>

  <h1>
    Check Your BMI For Free
  </h1>

  <p>
    Discover your Body Mass Index instantly and get smart
    fitness tips based on your health condition, weight,
    and height. Start your fitness journey today with GETFIT.
  </p>

</div>


{/* BMI SECTION */}

<div className="bmi-section">

  <div className="bmi-card">

    {/* LEFT */}
    <div className="bmi-left">

      <h2>CHECK YOUR BMI</h2>

      <p>
        Calculate your Body Mass Index and get fitness tips
        according to your health condition.
      </p>

      <div className="bmi-inputs">

        <input
          type="number"
          placeholder="Enter Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

      </div>

      <button
        className="bmi-btn"
        onClick={calculateBMI}
      >
        CALCULATE BMI
      </button>

    </div>

    {/* RIGHT */}
    <div className="bmi-right">

      <div className="bmi-circle">

        <span>
          {bmi ? bmi : "0.0"}
        </span>

        <p>
          {status ? status : "Your Result"}
        </p>

      </div>

      <div className="bmi-tip-box">

        <h3>Fitness Tip</h3>

        <p>
          {tip
            ? tip
            : "Enter your details to get personalized fitness tips."}
        </p>

      </div>

    </div>

  </div>

</div>











      {/* SIDE PANEL */}
   {showPanel && (
  <div className="overlay">
    
    {/* LEFT SIDE ONLY (not full screen) */}
    <div className="overlay-bg" onClick={() => setShowPanel(false)} />

    {/* RIGHT PANEL */}
    <div className="overlay-panel">
      <button className="close-btn" onClick={() => setShowPanel(false)}>
        ✖
      </button>

      <Onedaytry />
    </div>

  </div>
)}



 <div className="ai-section" id="getapp">

  <div className="ai-left">

    <p className="ai-tag">/ EAT HEALTHY</p>

    <h1>
      The Future Of Nutrition <br />
      With GET<span>FIT</span> APP
    </h1>

    <span className="ai-badge">Introducing</span>

    <h2>AI Food Scanner</h2>

    <p className="ai-desc">
      Upload a picture of your meal, and our advanced AI will instantly
      analyze and calculate the nutrition values for you, helping you stay
      on track with your goals effortlessly.
    </p>

    <p className="download-text">Download WTF App Now</p>

    <div className="store-buttons">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
      <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
    </div>
  </div>

  <div className="ai-right">
    <img
      src="https://cdn.dribbble.com/userupload/45478684/file/661aa8623d46861b2b0dd3e67a910496.png?resize={width}x{height}&vertical=center"
      alt="AI Scanner"
    />

  
  </div>
</div> 









{/*  PREMIUM EXPERIENCE SECTION */}
<section className="premium-container">

  {/* HEADER */}
  <div className="premium-header">
    <div>
      <p className="premium-sub">/ PREMIUM EXPERIENCE</p>
      <h1 className="premium-title">
        Unparalleled <br /> Access GETFIT Gyms
      </h1>
    </div>

    <div className="premium-right">
      <p>
        Access our premium facilities, cutting-edge equipment, and
        supportive community—all crafted to elevate your fitness journey
        with unmatched support and resources!
      </p>

      <button className="trial-btn">BOOK TRIAL @ ₹1</button>
    </div>
  </div>

  {/* GRID */}
  <div className="premium-grid">

    {/* CARD 1 */}
    <div className="card dark">
      <h3>Monthly BCA Test</h3>
      <p>
        Monthly Body Composition Analysis (BCA) tests to help you track
        progress & optimize your fitness plan
      </p>
    </div>

    {/* CARD 2 */}
    <div className="card light">
      <h3>Group Class Access</h3>
      <p>
        Get unlimited access to all group classes from cardio to yoga.
      </p>
    </div>

    {/*  VIDEO 1 */}
  

       <div className="card video-card">
  <iframe
    src="https://www.youtube.com/embed/RNkpzDaqOpM?autoplay=1&mute=1&loop=1&playlist=RNkpzDaqOpM"
    title="gym video"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>


    {/*  VIDEO 2 */}
  
     
     <div className="card video-card">
  <iframe
    src="https://www.youtube.com/embed/MzHrqp9m0Hw?autoplay=1&mute=1&loop=1&playlist=MzHrqp9m0Hw"
    title="gym video"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>



    


    {/* CARD 3 */}
    <div className="card light">
      <h3>Expert Guidance & Support</h3>
      <p>
        Get expert guidance from certified trainers to reach your goals.
      </p>
    </div>

    {/* CARD 4 */}
    <div className="card dark">
      <h3>AI Driven Workout & Diet Plan</h3>
      <p>
        Smart AI-based plans tailored to your fitness journey.
      </p>
    </div>

  </div>
</section>



<PricingTable></PricingTable>



  <div className="home-wrapper">
  <section className="how-container">
    <p className="how-subtitle">/ JOIN US TODAY</p>
    <h1 className="how-title">How it works?</h1>

    <div className="how-steps">

      <div className="step-card">
        {/* <div className="step-icon grey">🔍</div> */}
        <div className="step-icon grey">
  <FaSearch />
</div>
        <h3 className="step-title">Select your GETFIT Gym</h3>
        <p className="step-text">
          Choose your ideal gym location with ease for a convenient and accessible fitness experience.
        </p>
      </div>

      <div className="step-card">
        {/* <div className="step-icon dark">✨</div> */}
        <div className="step-icon dark">
  <FaDumbbell />
</div>
        <h3 className="step-title">Get Membership</h3>
        <p className="step-text">
          Sign up effortlessly with flexible plans designed to fit your lifestyle and fitness goals.
        </p>
      </div>

      <div className="step-card">
        {/* <div className="step-icon red">🏢</div> */}
        <div className="step-icon red">
  <FaRocket />
</div>
        <h3 className="step-title">Start your Journey</h3>
        <p className="step-text">
          Begin your transformation with expert guidance, advanced facilities, and a community that inspires success.
        </p>
      </div>

    </div>
  </section>

</div>



<FAQ></FAQ>












{/* <HowItWorks></HowItWorks> */}


      {/* FOOTER */}
      {/* <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>GETFIT</h3>
            <p>Your ultimate fitness partner </p>
              <div className="store-buttons">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
      <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
    </div>
          </div>
                            
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/gym">Gyms</a>
            <a href="/Fitness">Programs</a>
            <a href="/Store">Store</a>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: support@getfit.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 GETFIT. All rights reserved.
        </div>
      </footer> */}





<footer className="footer">
  <div className="footer-container">

    {/* BRAND */}
    <div className="footer-section">
      <h3>GETFIT</h3>
      <p>Your ultimate fitness partner 💪</p>
      <p className="footer-about">
        Track workouts, join programs, and transform your lifestyle with GETFIT.
      </p>

      <div className="store-buttons">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
      </div>
    </div>

    {/* QUICK LINKS */}
    <div className="footer-section">
      <h4>Quick Links</h4>
      <a href="/">Home</a>
      <a href="/gym">Gyms</a>
      <a href="/fitness">Programs</a>
      <a href="/store">Store</a>
      <a href="/blog">Blog</a>
    </div>

    {/* SUPPORT */}
    <div className="footer-section">
      <h4>Support</h4>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <a href="/help">Help Center</a>
      <a href="/faq">FAQs</a>
    </div>

    {/* COMPANY */}
    <div className="footer-section">
      <h4>Company</h4>
      <a href="/about">About Us</a>
      <a href="/careers">Careers</a>
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms & Conditions</a>
    </div>

    {/* CONTACT */}
    <div className="footer-section">
      <h4>Contact</h4>
      <p>Email: support@getfit.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Pune, India</p>

      {/* SOCIAL ICONS */}
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 GETFIT. All rights reserved.</p>
    <p className="footer-credit">Made with ❤️ for fitness lovers</p>
  </div>
</footer>







    </>













  );
}

export default Getfit;








