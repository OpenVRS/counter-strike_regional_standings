### Roster Details<br />
Team Name: Team Unitronic<br />
Roster: ImpressioN, Kuma, w1nt3r<br />
Global Rank: [335](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_29.md)<br />
Regional Rank: [45]( ../../standings_asia_2026_03_29.md)<br />
<br />
Final Rank Value:  476.1<br />
<br />
Final Rank Value (476.1) = Starting Rank Value (498.6) + Head To Head Adjustments (-22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.6
- 400 + ( ( 0.051 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 498.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.008
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       12 | 2026-03-28 | TEAM XDM                  | L   | 1.000      | -            | -                | -                | -         |   -15.31 | clyd1e, ImpressioN, Kuma, mentalplay, w1nt3r |
|            4 |       56 | 2026-03-27 | Just Swing (Chinese team) | L   | 1.000      | -            | -                | -                | -         |    -8.53 | clyd1e, ImpressioN, Kuma, mentalplay, w1nt3r |
|            3 |     4221 | 2025-11-08 | Deep Cross Gaming         | L   | 0.262      | -            | -                | -                | -         |    -2.71 | Derek, ImpressioN, Kuma, w1nt3r, Zumss       |
|            2 |     4264 | 2025-11-08 | Team Arise                | W   | 0.257      | 0.433        | 0.002 (0.000)    | 0.117 (0.013)    | 1 (0.257) |     5.59 | Derek, ImpressioN, Kuma, w1nt3r, Zumss       |
|            1 |     4376 | 2025-11-07 | BIG                       | L   | 0.249      | -            | -                | -                | -         |    -1.47 | Derek, ImpressioN, Kuma, w1nt3r, Zumss       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
