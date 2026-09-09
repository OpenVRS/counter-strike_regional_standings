### Roster Details<br />
Team Name: ACROBATS<br />
Roster: dwushka, fame, FL1T, Krad, tried<br />
Global Rank: [340](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [218]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  523.0<br />
<br />
Final Rank Value (523.0) = Starting Rank Value (512.4) + Head To Head Adjustments (10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 512.4
- 400 + ( ( 0.059 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 512.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4644 | 2026-04-02 | 100 Thieves | L   | 0.140      | -            | -                | -                | -         |    -0.03 | dwushka, fame, FL1T, Krad, tried |
|            5 |     4673 | 2026-04-02 | WW          | W   | 0.139      | 0.769        | 0.044 (0.005)    | 0.255 (0.027)    | 0 (0.000) |     4.21 | dwushka, fame, FL1T, Krad, tried |
|            4 |     4735 | 2026-04-01 | magic       | L   | 0.133      | -            | -                | -                | -         |    -0.04 | dwushka, fame, FL1T, Krad, tried |
|            3 |     4819 | 2026-03-31 | HOTU        | W   | 0.127      | 0.769        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.61 | dwushka, fame, FL1T, Krad, tried |
|            2 |     5219 | 2026-03-25 | AM          | W   | 0.087      | 0.624        | 0.002 (0.000)    | 0.098 (0.005)    | 0 (0.000) |     2.03 | dwushka, fame, FL1T, Krad, tried |
|            1 |     5232 | 2026-03-25 | B8 Academy  | W   | 0.086      | 0.624        | 0.002 (0.000)    | 0.099 (0.005)    | 0 (0.000) |     1.76 | dwushka, fame, FL1T, Krad, tried |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
