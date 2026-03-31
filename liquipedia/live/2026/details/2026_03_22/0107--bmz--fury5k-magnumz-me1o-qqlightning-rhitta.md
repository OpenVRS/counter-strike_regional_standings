### Roster Details<br />
Team Name: BMZ<br />
Roster: fury5k, MagnumZ, me1o, QQLIGHTNING, rhitta<br />
Global Rank: [107](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_22.md)<br />
Regional Rank: [10]( ../../standings_asia_2026_03_22.md)<br />
<br />
Final Rank Value:  990.0<br />
<br />
Final Rank Value (990.0) = Starting Rank Value (1004.1) + Head To Head Adjustments (-14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.590[<sup>2</sup>](#table1)

The average of these factors is 0.303<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1004.1
- 400 + ( ( 0.303 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1004.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.170
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |        2 | 2026-03-22 | Chinggis Warriors   | L   | 1.000      | -            | -                | -                | -         |   -12.62 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhitta |
|           13 |       14 | 2026-03-21 | NEXVOID             | W   | 1.000      | 0.307        | 0.016 (0.005)    | 0.275 (0.084)    | 1 (1.000) |    21.07 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhitta |
|           12 |       16 | 2026-03-21 | Chinggis Warriors   | L   | 1.000      | -            | -                | -                | -         |   -12.81 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhitta |
|           11 |       44 | 2026-03-18 | The Huns Esports    | W   | 1.000      | 0.307        | 0.016 (0.005)    | 0.511 (0.157)    | 1 (1.000) |    22.62 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhitta |
|           10 |       57 | 2026-03-18 | 5star eSports       | L   | 1.000      | -            | -                | -                | -         |   -17.34 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhitta |
|            9 |       76 | 2026-03-17 | The QUBE Esports    | W   | 1.000      | 0.307        | 0.008 (0.002)    | 0.189 (0.058)    | 1 (1.000) |     9.27 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhitta |
|            8 |       83 | 2026-03-16 | The MongolZ Academy | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     1.18 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhitta |
|            7 |       85 | 2026-03-16 | The QUBE Esports    | L   | 1.000      | -            | -                | -                | -         |   -22.69 | fury5k, MagnumZ, me1o, QQLIGHTNING, rhitta |
|            6 |      870 | 2026-02-27 | Chinggis Warriors   | L   | 1.000      | -            | -                | -                | -         |   -13.88 | fury5k, MagnumZ, me1o, rhitta, wonderzce   |
|            5 |      902 | 2026-02-27 | The Huns Esports    | L   | 1.000      | -            | -                | -                | -         |    -9.56 | fury5k, MagnumZ, me1o, rhitta, wonderzce   |
|            4 |      987 | 2026-02-26 | NEXVOID             | W   | 1.000      | 0.284        | 0.016 (0.004)    | 0.275 (0.078)    | 1 (1.000) |    23.45 | fury5k, MagnumZ, me1o, rhitta, wonderzce   |
|            3 |     1901 | 2026-02-06 | The Huns Esports    | L   | 0.902      | -            | -                | -                | -         |    -8.81 | fury5k, MagnumZ, me1o, rhitta, wonderzce   |
|            2 |     1919 | 2026-02-05 | 5star eSports       | W   | 0.897      | 0.284        | 0.020 (0.005)    | 0.208 (0.053)    | 1 (0.897) |    13.37 | fury5k, MagnumZ, me1o, rhitta, wonderzce   |
|            1 |     1927 | 2026-02-04 | NEXVOID             | L   | 0.894      | -            | -                | -                | -         |    -7.38 | fury5k, MagnumZ, me1o, rhitta, wonderzce   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,108.05)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-22 |      1.000 | $1,394.49      | $1,394.49       |
| 2026-02-27 |      1.000 | $375.00        | $375.00         |
| 2026-02-06 |      0.903 | $375.00        | $338.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
