### Roster Details<br />
Team Name: Betclic<br />
Roster: Demho, Dr3nquu, eskyy, hades, Prism<br />
Global Rank: [183](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [134]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  765.0<br />
<br />
Final Rank Value (765.0) = Starting Rank Value (742.5) + Head To Head Adjustments (22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 742.5
- 400 + ( ( 0.171 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 742.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |     3540 | 2026-06-15 | 100 Thieves     | L   | 0.453      | -            | -                | -                | -         |    -0.20 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           24 |     3701 | 2026-06-09 | Nordic Partners | W   | 0.413      | 0.435        | 0.009 (0.002)    | 0.319 (0.057)    | 0 (0.000) |    10.49 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           23 |     3741 | 2026-06-07 | Spirit Academy  | L   | 0.400      | -            | -                | -                | -         |    -3.49 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           22 |     3757 | 2026-06-07 | Drama           | W   | 0.398      | 0.435        | 0.001 (0.000)    | 0.627 (0.108)    | 0 (0.000) |     7.70 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           21 |     3787 | 2026-06-06 | INOX Division   | L   | 0.392      | -            | -                | -                | -         |    -2.02 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           20 |     3812 | 2026-06-05 | Color           | L   | 0.386      | -            | -                | -                | -         |    -2.49 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           19 |     3822 | 2026-06-04 | ASTRAL          | W   | 0.380      | 0.435        | 0.007 (0.001)    | 0.474 (0.078)    | 0 (0.000) |    10.09 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           18 |     3832 | 2026-06-04 | KOLESIE         | W   | 0.379      | 0.384        | 0.010 (0.001)    | 0.272 (0.040)    | 0 (0.000) |     8.02 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           17 |     4010 | 2026-05-29 | ALGO            | L   | 0.339      | -            | -                | -                | -         |    -6.36 | Demho, Dr3nquu, eskyy, POLO, Prism   |
|           16 |     4032 | 2026-05-28 | Eternal Fire    | L   | 0.334      | -            | -                | -                | -         |    -0.23 | Demho, Dr3nquu, eskyy, POLO, Prism   |
|           15 |     4060 | 2026-05-28 | GenOne          | L   | 0.332      | -            | -                | -                | -         |    -0.47 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           14 |     4242 | 2026-05-23 | Acend           | L   | 0.300      | -            | -                | -                | -         |    -0.54 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           13 |     4283 | 2026-05-22 | RBLS            | W   | 0.295      | 0.435        | 0.001 (0.000)    | 0.086 (0.011)    | 1 (0.295) |     4.96 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           12 |     4298 | 2026-05-22 | DENDELE         | L   | 0.293      | -            | -                | -                | -         |    -0.33 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           11 |     4328 | 2026-05-21 | Metizport       | W   | 0.288      | 0.435        | 0.037 (0.005)    | 0.659 (0.082)    | 1 (0.288) |     8.68 | Demho, Dr3nquu, eskyy, hades, Prism  |
|           10 |     4331 | 2026-05-21 | OG              | W   | 0.287      | 0.435        | 0.020 (0.002)    | 0.316 (0.039)    | 1 (0.287) |     7.14 | Demho, Dr3nquu, eskyy, hades, Prism  |
|            9 |     4336 | 2026-05-21 | RBLS            | L   | 0.287      | -            | -                | -                | -         |    -4.27 | Demho, Dr3nquu, eskyy, hades, Prism  |
|            8 |     4364 | 2026-05-21 | Passion UA      | W   | 0.284      | 0.435        | 0.003 (0.000)    | 0.016 (0.002)    | 1 (0.284) |     3.95 | Bogdan, Demho, Dr3nquu, hades, Prism |
|            7 |     4556 | 2026-05-13 | TNC             | L   | 0.235      | -            | -                | -                | -         |    -4.42 | Bogdan, Demho, Dr3nquu, hades, Prism |
|            6 |     4567 | 2026-05-13 | AM              | L   | 0.233      | -            | -                | -                | -         |    -4.40 | Bogdan, Demho, Dr3nquu, hades, Prism |
|            5 |     4653 | 2026-05-11 | Johnny Speeds   | L   | 0.219      | -            | -                | -                | -         |    -3.15 | Demho, Dr3nquu, eskyy, hades, Prism  |
|            4 |     4711 | 2026-05-09 | FAVBET          | L   | 0.207      | -            | -                | -                | -         |    -4.99 | Demho, Dr3nquu, eskyy, hades, Prism  |
|            3 |     4755 | 2026-05-07 | INOX Division   | L   | 0.194      | -            | -                | -                | -         |    -0.99 | Demho, Dr3nquu, eskyy, hades, Prism  |
|            2 |     5308 | 2026-04-24 | DENDELE         | L   | 0.106      | -            | -                | -                | -         |    -0.12 | Demho, Dr3nquu, eskyy, hades, Prism  |
|            1 |     5345 | 2026-04-23 | Luminosity      | L   | 0.099      | -            | -                | -                | -         |    -0.03 | Demho, Dr3nquu, eskyy, hades, Prism  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,042.34)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-06 |      0.394 | $1,250.00      | $492.63         |
| 2026-05-24 |      0.308 | $1,000.00      | $307.54         |
| 2026-04-26 |      0.121 | $2,000.00      | $242.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
