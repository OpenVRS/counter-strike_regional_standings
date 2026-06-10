### Roster Details<br />
Team Name: ENJOY (Russian team)<br />
Roster: kurosa, nbl, roxesz, sh1geo, zazzer<br />
Global Rank: [166](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [110]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  835.5<br />
<br />
Final Rank Value (835.5) = Starting Rank Value (716.4) + Head To Head Adjustments (119.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.085[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.4
- 400 + ( ( 0.164 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 716.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.229
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       80 | 2026-05-31 | G2 Ares              | W   | 1.000      | 0.303        | 0.011 (0.003)    | 0.580 (0.176)    | 0 (0.000) |    21.84 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           13 |      133 | 2026-05-30 | G2 Ares              | W   | 1.000      | 0.303        | 0.011 (0.003)    | 0.580 (0.176)    | 0 (0.000) |    23.73 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           12 |      211 | 2026-05-28 | Brazylijski luz      | W   | 1.000      | 0.303        | 0.006 (0.002)    | 0.422 (0.128)    | 0 (0.000) |    19.12 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           11 |      326 | 2026-05-25 | Dripmen              | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.237 (0.072)    | 0 (0.000) |    12.60 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           10 |      415 | 2026-05-23 | SAW                  | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.198 (0.060)    | 0 (0.000) |    14.94 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            9 |     1699 | 2026-04-12 | Vexar                | W   | 0.821      | 0.278        | 0.002 (0.000)    | 0.248 (0.057)    | 0 (0.000) |    11.08 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            8 |     1729 | 2026-04-11 | CYBERSHOKE Prospects | W   | 0.813      | 0.278        | 0.006 (0.001)    | 0.529 (0.120)    | 0 (0.000) |    21.18 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            7 |     1780 | 2026-04-09 | ZOTIX                | W   | 0.801      | 0.278        | 0.000 (0.000)    | 0.027 (0.006)    | 0 (0.000) |     5.68 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            6 |     2656 | 2026-03-27 | OLDBOYS              | L   | 0.714      | -            | -                | -                | -         |   -11.19 | nbl, roxesz, sh1geo, spiker, zazzer |
|            5 |     3348 | 2026-03-13 | Young Ninjas         | L   | 0.621      | -            | -                | -                | -         |    -6.25 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            4 |     4740 | 2026-02-14 | TDK                  | L   | 0.441      | -            | -                | -                | -         |    -1.15 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            3 |     4836 | 2026-02-13 | VP.Prodigy           | W   | 0.431      | 0.384        | 0.000 (0.000)    | 0.176 (0.029)    | 0 (0.000) |     5.15 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            2 |     4938 | 2026-02-10 | PsychoFace           | L   | 0.413      | -            | -                | -                | -         |    -2.15 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            1 |     4968 | 2026-02-09 | VP.Prodigy           | W   | 0.405      | 0.384        | 0.000 (0.000)    | 0.176 (0.027)    | 0 (0.000) |     4.54 | nbl, reyoz, roxesz, sh1geo, zazzer  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,753.03)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-04-12 |      0.821 | $1,250.00      | $1,025.72       |
| 2026-03-29 |      0.727 | $1,000.00      | $727.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
