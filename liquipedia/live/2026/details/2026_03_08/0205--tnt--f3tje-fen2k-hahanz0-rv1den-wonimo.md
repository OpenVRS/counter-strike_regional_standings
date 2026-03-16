### Roster Details<br />
Team Name: TNT<br />
Roster: f3tje, fen2k, hahanz0, rv1den, wonimo<br />
Global Rank: [205](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [137]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  693.7<br />
<br />
Final Rank Value (693.7) = Starting Rank Value (656.4) + Head To Head Adjustments (37.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 656.4
- 400 + ( ( 0.134 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 656.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.098
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      733 | 2026-02-17 | Ex-Flame Sharks | L   | 1.000      | -            | -                | -                | -         |   -15.35 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            5 |      787 | 2026-02-16 | KONO.ECF        | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.424 (0.163)    | 0 (0.000) |    22.74 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            4 |      825 | 2026-02-15 | ASTRAL Esports  | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.550 (0.211)    | 0 (0.000) |    26.17 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            3 |      901 | 2026-02-14 | SPARTA Esports  | L   | 1.000      | -            | -                | -                | -         |    -5.06 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            2 |     2196 | 2025-12-14 | ELITenergy      | L   | 0.638      | -            | -                | -                | -         |    -8.49 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            1 |     2225 | 2025-12-12 | Oxuji Esports   | W   | 0.625      | 0.278        | 0.020 (0.004)    | 0.440 (0.076)    | 0 (0.000) |    17.31 | f3tje, fen2k, hahanz0, rv1den, wonimo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($478.77)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      0.638 | $750.00        | $478.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
