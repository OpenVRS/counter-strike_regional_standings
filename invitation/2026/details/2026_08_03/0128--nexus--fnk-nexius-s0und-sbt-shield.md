### Roster Details<br />
Team Name: Nexus<br />
Roster: fNk, Nexius, s0und, SBT, shield<br />
Global Rank: [128](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [91]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  913.4<br />
<br />
Final Rank Value (913.4) = Starting Rank Value (866.5) + Head To Head Adjustments (46.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.301[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 866.5
- 400 + ( ( 0.241 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 866.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      980 | 2026-06-14 | Alliance   | L   | 0.866      | -            | -                | -                | -         |    -0.70 | fNk, Nexius, s0und, SBT, shield |
|            4 |      985 | 2026-06-14 | Noir Verse | W   | 0.865      | 0.373        | 0.001 (0.000)    | 0.207 (0.067)    | 1 (0.865) |    13.45 | fNk, Nexius, s0und, SBT, shield |
|            3 |     1005 | 2026-06-13 | Metizport  | L   | 0.860      | -            | -                | -                | -         |    -8.05 | fNk, Nexius, s0und, SBT, shield |
|            2 |     1011 | 2026-06-13 | Alliance   | W   | 0.860      | 0.373        | 0.279 (0.090)    | 0.937 (0.301)    | 1 (0.860) |    26.49 | fNk, Nexius, s0und, SBT, shield |
|            1 |     1023 | 2026-06-13 | PURE       | W   | 0.859      | 0.373        | 0.001 (0.000)    | 0.260 (0.083)    | 1 (0.859) |    15.75 | fNk, Nexius, s0und, SBT, shield |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,735.29)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      0.868 | $2,000.00      | $1,735.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
