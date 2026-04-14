### Roster Details<br />
Team Name: Team Unitronic<br />
Roster: ImpressioN, Kuma, w1nt3r<br />
Global Rank: [338](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [43]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  474.9<br />
<br />
Final Rank Value (474.9) = Starting Rank Value (495.1) + Head To Head Adjustments (-20.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.1
- 400 + ( ( 0.049 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 495.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.006
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      398 | 2026-03-28 | TEAM XDM                  | L   | 1.000      | -            | -                | -                | -         |   -14.67 | clyd1e, ImpressioN, Kuma, mentalplay, w1nt3r |
|            4 |      473 | 2026-03-27 | Just Swing (Chinese team) | L   | 1.000      | -            | -                | -                | -         |    -6.56 | clyd1e, ImpressioN, Kuma, mentalplay, w1nt3r |
|            3 |     4725 | 2025-11-08 | Deep Cross Gaming         | L   | 0.211      | -            | -                | -                | -         |    -2.22 | Derek, ImpressioN, Kuma, w1nt3r, Zumss       |
|            2 |     4768 | 2025-11-08 | Team Arise                | W   | 0.206      | 0.433        | 0.002 (0.000)    | 0.106 (0.009)    | 1 (0.206) |     4.54 | Derek, ImpressioN, Kuma, w1nt3r, Zumss       |
|            1 |     4880 | 2025-11-07 | BIG                       | L   | 0.199      | -            | -                | -                | -         |    -1.28 | Derek, ImpressioN, Kuma, w1nt3r, Zumss       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
