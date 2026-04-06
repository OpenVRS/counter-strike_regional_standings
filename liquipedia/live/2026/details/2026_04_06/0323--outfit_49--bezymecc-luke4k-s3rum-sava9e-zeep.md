### Roster Details<br />
Team Name: Outfit 49<br />
Roster: bezymecc, LUKE4k, s3rum, sava9e, zeep<br />
Global Rank: [323](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [93]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  495.2<br />
<br />
Final Rank Value (495.2) = Starting Rank Value (496.8) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 496.8
- 400 + ( ( 0.049 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 496.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.005
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     4696 | 2025-11-08 | Memeories            | L   | 0.209      | -            | -                | -                | -         |    -3.20 | Bizarre666, dAVE, LUKE4k, s3rum, sava9e |
|            6 |     4702 | 2025-11-08 | NRG                  | L   | 0.208      | -            | -                | -                | -         |    -0.07 | Bizarre666, dAVE, LUKE4k, s3rum, sava9e |
|            5 |     5168 | 2025-10-26 | OverKnight           | L   | 0.122      | -            | -                | -                | -         |    -1.83 | bezymecc, LUKE4k, s3rum, sava9e, zeep   |
|            4 |     5226 | 2025-10-25 | Sakura Esports       | W   | 0.115      | 0.333        | 0.021 (0.001)    | 0.054 (0.002)    | 0 (0.000) |     2.90 | bezymecc, LUKE4k, s3rum, sava9e, zeep   |
|            3 |     5385 | 2025-10-22 | Chicken Coop Esports | L   | 0.095      | -            | -                | -                | -         |    -0.61 | bezymecc, LUKE4k, s3rum, sava9e, zeep   |
|            2 |     5498 | 2025-10-16 | Zomblers             | W   | 0.055      | 0.333        | 0.002 (0.000)    | 0.253 (0.005)    | 0 (0.000) |     1.30 | bezymecc, LUKE4k, s3rum, sava9e, zeep   |
|            1 |     5608 | 2025-10-13 | Life's A Game        | L   | 0.035      | -            | -                | -                | -         |    -0.09 | bezymecc, LUKE4k, s3rum, sava9e, zeep   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
