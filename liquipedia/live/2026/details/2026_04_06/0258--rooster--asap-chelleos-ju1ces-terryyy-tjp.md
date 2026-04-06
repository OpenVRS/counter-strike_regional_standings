### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, ju1ces, Terryyy, TjP<br />
Global Rank: [258](../../standings_global_.md)<br />
<br />
Region: [Asia]( ../../standings_asia_.md)<br />
Regional Rank: [31]( ../../standings_asia_.md)<br />
<br />
Final Rank Value:  639.0<br />
<br />
Final Rank Value (639.0) = Starting Rank Value (622.7) + Head To Head Adjustments (16.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 622.7
- 400 + ( ( 0.114 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 622.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.021
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     4566 | 2025-11-13 | SemperFi Esports            | L   | 0.238      | -            | -                | -                | -         |    -0.21 | asap, chelleos, ju1ces, Terryyy, TjP  |
|            8 |     4601 | 2025-11-12 | Ground Zero Gaming          | W   | 0.231      | 0.278        | 0.013 (0.001)    | 0.213 (0.014)    | 0 (0.000) |     6.45 | asap, chelleos, ju1ces, Terryyy, TjP  |
|            7 |     4656 | 2025-11-10 | Mindfreak (Australian team) | W   | 0.218      | 0.278        | 0.014 (0.001)    | 0.355 (0.022)    | 0 (0.000) |     6.00 | asap, chelleos, ju1ces, Terryyy, TjP  |
|            6 |     5265 | 2025-10-25 | Vantage Esports             | W   | 0.111      | 0.278        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     1.10 | asap, chelleos, jhd, ju1ces, Terryyy  |
|            5 |     5331 | 2025-10-24 | FURY                        | W   | 0.105      | 0.278        | 0.000 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     1.07 | asap, chelleos, jhd, ju1ces, Terryyy  |
|            4 |     5376 | 2025-10-23 | Mindfreak (Australian team) | L   | 0.098      | -            | -                | -                | -         |    -0.38 | asap, chelleos, jhd, ju1ces, Terryyy  |
|            3 |     5492 | 2025-10-17 | SemperFi Esports            | L   | 0.058      | -            | -                | -                | -         |    -0.05 | asap, chelleos, sliimey, Terryyy, TjP |
|            2 |     5523 | 2025-10-16 | Mindfreak (Australian team) | W   | 0.051      | 0.278        | 0.014 (0.000)    | 0.355 (0.005)    | 0 (0.000) |     1.42 | asap, chelleos, sliimey, Terryyy, TjP |
|            1 |     5592 | 2025-10-14 | Rooster                     | W   | 0.038      | 0.278        | 0.006 (0.000)    | 0.229 (0.002)    | 0 (0.000) |     0.96 | asap, chelleos, sliimey, Terryyy, TjP |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($296.04)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-13 |      0.238 | $1,000.00      | $238.16         |
| 2025-10-17 |      0.058 | $1,000.00      | $57.88          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
