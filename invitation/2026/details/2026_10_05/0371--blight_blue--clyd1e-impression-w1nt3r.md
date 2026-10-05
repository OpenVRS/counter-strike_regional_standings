### Roster Details<br />
Team Name: bLight blue<br />
Roster: clyd1e, ImpressioN, w1nt3r<br />
Global Rank: [371](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_10_05.md)<br />
Regional Rank: [44]( ../../standings_asia_2026_10_05.md)<br />
<br />
Final Rank Value:  408.9<br />
<br />
Final Rank Value (408.9) = Starting Rank Value (408.1) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.014[<sup>2</sup>](#table1)

The average of these factors is 0.004<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 408.1
- 400 + ( ( 0.004 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 408.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      513 | 2026-09-24 | Vitalem Aerem  | L   | 1.000      | -            | -                | -                | -         |    -4.28 | clyd1e, Derek, Di1ka, ImpressioN, w1nt3r     |
|            6 |      581 | 2026-09-23 | 1337           | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.034 (0.011)    | 0 (0.000) |    17.15 | clyd1e, Derek, Di1ka, ImpressioN, w1nt3r     |
|            5 |      661 | 2026-09-22 | NEXVOID        | L   | 1.000      | -            | -                | -                | -         |    -1.10 | clyd1e, Derek, Di1ka, ImpressioN, w1nt3r     |
|            4 |      918 | 2026-09-15 | PATSANVISION   | L   | 1.000      | -            | -                | -                | -         |   -12.16 | Anony, clyd1e, Derek, ImpressioN, w1nt3r     |
|            3 |     4904 | 2026-05-01 | BORING PLAYERS | L   | 0.157      | -            | -                | -                | -         |    -1.83 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |
|            2 |     4956 | 2026-04-30 | 5star          | L   | 0.151      | -            | -                | -                | -         |    -0.05 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |
|            1 |     4998 | 2026-04-30 | Legion         | W   | 0.144      | 0.471        | 0.000 (0.000)    | 0.103 (0.007)    | 1 (0.144) |     3.04 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
