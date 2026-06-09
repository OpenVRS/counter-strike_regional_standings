### Roster Details<br />
Team Name: Team Unitronic<br />
Roster: clyd1e, ImpressioN, Kuma, mentalplay, w1nt3r<br />
Global Rank: [313](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  533.0<br />
<br />
Final Rank Value (533.0) = Starting Rank Value (537.8) + Head To Head Adjustments (-4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.8
- 400 + ( ( 0.072 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 537.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.033
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      959 | 2026-05-01 | BORING PLAYER             | L   | 1.000      | -            | -                | -                | -         |    -7.65 | clyd1e, ImpressioN, Kuma, mentalplay, w1nt3r |
|            4 |     1012 | 2026-04-30 | 5star eSports             | L   | 0.995      | -            | -                | -                | -         |    -1.10 | clyd1e, ImpressioN, Kuma, mentalplay, w1nt3r |
|            3 |     1056 | 2026-04-30 | Legion (Pakistani team)   | W   | 0.990      | 0.471        | 0.001 (0.000)    | 0.146 (0.068)    | 1 (0.990) |    21.68 | clyd1e, ImpressioN, Kuma, mentalplay, w1nt3r |
|            2 |     2446 | 2026-03-28 | TEAM XDM                  | L   | 0.776      | -            | -                | -                | -         |   -13.32 | clyd1e, ImpressioN, Kuma, mentalplay, w1nt3r |
|            1 |     2527 | 2026-03-27 | Just Swing (Chinese team) | L   | 0.769      | -            | -                | -                | -         |    -4.42 | clyd1e, ImpressioN, Kuma, mentalplay, w1nt3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
