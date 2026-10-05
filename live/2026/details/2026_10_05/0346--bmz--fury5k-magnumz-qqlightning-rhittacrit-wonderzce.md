### Roster Details<br />
Team Name: BMZ<br />
Roster: fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce<br />
Global Rank: [346](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_10_05.md)<br />
Regional Rank: [42]( ../../standings_asia_2026_10_05.md)<br />
<br />
Final Rank Value:  487.9<br />
<br />
Final Rank Value (487.9) = Starting Rank Value (490.6) + Head To Head Adjustments (-2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.015[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 490.6
- 400 + ( ( 0.045 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 490.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4903 | 2026-05-02 | Vitalem Aerem | L   | 0.158      | -            | -                | -                | -         |    -1.09 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |
|            5 |     4941 | 2026-05-01 | WYDO          | W   | 0.153      | 0.471        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.153) |     1.83 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |
|            4 |     4991 | 2026-04-30 | ZEVS          | L   | 0.145      | -            | -                | -                | -         |    -2.81 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |
|            3 |     5067 | 2026-04-28 | QuantumX      | L   | 0.133      | -            | -                | -                | -         |    -2.63 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |
|            2 |     5126 | 2026-04-27 | The Huns      | L   | 0.124      | -            | -                | -                | -         |    -0.96 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |
|            1 |     5169 | 2026-04-26 | Vitalem Aerem | W   | 0.120      | 0.333        | 0.002 (0.000)    | 0.229 (0.009)    | 0 (0.000) |     2.96 | fury5k, MagnumZ, QQLIGHTNING, rhittacrit, Wonderzce |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
